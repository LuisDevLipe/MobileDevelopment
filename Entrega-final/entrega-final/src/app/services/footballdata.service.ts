import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  CompetitionRequest,
  StandingsRequest,
  CompetitionMatchesRequest,
} from 'src/app/services/entities/competition.request';
import {
  CompetitionResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
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
    request: CompetitionRequest
  ): Promise<CompetitionResponse[]> {
    const competitionCode = request.id;
    if (competitionCode) {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions/${competitionCode}`,
        headers: this.headers,
      });
      return response.data;
    } else {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions`,
        headers: this.headers,
      });
      return response.data.competitions;
    }
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
        season: request.filters?.season?.toString() ?? '',
        limit: request.filters?.limit?.toString() ?? '',
        offset: request.filters?.offset?.toString() ?? '',
      },
    });
    return response.data as CompetitionMatchesResponse;
  }
}
