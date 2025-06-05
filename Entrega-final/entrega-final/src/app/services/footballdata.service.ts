import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  CompetitionsRequest,
  CompetitionRequest,
  StandingsRequest,
  CompetitionMatchesRequest,
  CompetitionTeamsRequest,
} from 'src/app/services/entities/competition.request';
import {
  CompetitionsResponse,
  CompetitionResponse,
  CompetitionsResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
  CompetitionTeamsResponse,
} from 'src/app/services/entities/competition.response';

import { CapacitorHttp } from '@capacitor/core';

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
<<<<<<< HEAD
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
=======
    request: CompetitionRequest
  ): Promise<CompetitionResponse | CompetitionsResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions`,
      headers: this.headers,
    });
    return response.data.competitions as CompetitionsResponse;
  }
  async Competition(request: CompetitionRequest): Promise<CompetitionResponse> {
    const competitionCode = request.id;
    if (competitionCode) {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions/${competitionCode}`, 
        headers: this.headers,
      });
      return response.data as CompetitionResponse;
    }
    throw new Error('Competition ID is required');
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
  }

  async Standings(request: StandingsRequest): Promise<StandingsResponse> {
    const competitionCode = request.id;
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${competitionCode}/standings`,
      headers: this.headers,
      params: {
        matchday: request.filters?.matchday?.toString() ?? '',
        season: request.filters?.season ?? '',
        date: request.filters?.date ?? '', // YYYY-MM-DD
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
}
