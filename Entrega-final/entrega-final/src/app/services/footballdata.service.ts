import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  CompetitionsRequest,
  CompetitionRequest,
  StandingsRequest,
  CompetitionMatchesRequest,
  CompetitionTeamsRequest,
  CompetitionScorersRequest,
} from 'src/app/services/entities/competition.request';
import {
  CompetitionsResponse,
  CompetitionResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
  CompetitionTeamsResponse,
  CompetitionScorersResponse,
} from 'src/app/services/entities/competition.response';

import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class FootballdataService {
  private headers = {
    'X-Auth-Token': '',
  };
  private url: string;

  constructor(private http: HttpClient) {
    this.headers['X-Auth-Token'] = environment.FOOTBALL_DATA_API_KEY;
    this.url = environment.FOOTBALL_DATA_API_URL;
  }

  async Competitions(
    request: CompetitionsRequest
  ): Promise<CompetitionsResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/`,
      headers: this.headers,
      params: {
        areas: request.filters?.areas ?? '',
      },
    });
    return response.data;
  }

  async Competition(request: CompetitionRequest): Promise<CompetitionResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${request.competitionCode}`,
      headers: this.headers,
    });
    return response.data as CompetitionResponse;
  }

  async Standings(request: StandingsRequest): Promise<StandingsResponse> {
    const competitionCode = request.id;
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${competitionCode}/standings`,
      headers: this.headers,
      params: {
        ...request.filters as HttpParams, // Spread the filters directly
      },
    });
    return response.data as StandingsResponse;
  }

  async CompetitionMatches(
    request: CompetitionMatchesRequest
  ): Promise<CompetitionMatchesResponse> {
    // console.log(request);
    const competitionCode = request.id;
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${competitionCode}/matches`,
      headers: this.headers,
      params: {
        dateFrom: request.filters?.dateFrom ?? '',
        dateTo: request.filters?.dateTo ?? '',
        stage: request.filters?.stage ?? '',
        status: request.filters?.status ?? '',
        matchday: request.filters?.matchday?.toString() ?? '',
        group: request.filters?.group ?? '',
        season: request.filters?.season ?? '',
        limit: request.filters?.limit?.toString() ?? '',
        offset: request.filters?.offset?.toString() ?? '',
      },
    });
    return response.data as CompetitionMatchesResponse;
  }

  async CompetitionTeams(
    request: CompetitionTeamsRequest
  ): Promise<CompetitionTeamsResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${request.competitionCode}/teams`,
      headers: this.headers,
      params: {
        season: request.filters?.season ?? '',
      },
    });
    return response.data as CompetitionTeamsResponse;
  }

  async CompetitionScorers(
    request: CompetitionScorersRequest
  ): Promise<CompetitionScorersResponse> {
    const response = await CapacitorHttp.get({
      headers: this.headers,
      url: this.parseUrl([
        'competitions',
        request.competitionCode.toString(),
        'scorers',
      ]),
      params: {
        ...(request.filters as HttpParams),
      },
    } as HttpOptions);

    return response.data as CompetitionScorersResponse;
  }

  parseUrl(fragments: string[]): string {
    if (fragments.length === 0) {
      return this.url;
    }
    return `${this.url}/${fragments.join('/')}`;
  }
}
