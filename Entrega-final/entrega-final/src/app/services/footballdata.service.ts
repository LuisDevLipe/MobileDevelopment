import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { StandingsRequest } from '../entities/standings.request';
import { StandingsResponse } from '../entities/standings.response';
import { MatchesRequest } from '../entities/matches.request';
import { MatchesResponse } from '../entities/matches.response';
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

  async Competitions(id?: number, competition?: string) {
    if (competition) {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions/${competition}`,
        headers: this.headers,
      });
      return response.data;
    }
    if (id) {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions/${id}`,
        headers: this.headers,
      });
      return response.data.competitions as any;
    } else {
      const response = await CapacitorHttp.get({
        url: `${this.url}/competitions`,
        headers: this.headers,
      });
      return response.data.competitions;
    }
  }

  async Standings(request: StandingsRequest): Promise<StandingsResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/competitions/${request.code}/standings`,
      headers: this.headers,
      params: {
        season: request.season ?? '',
      },
    });
    return response.data as StandingsResponse;
  }

  async Matches(request: MatchesRequest): Promise<MatchesResponse> {
    const response = await CapacitorHttp.get({
      url: `${this.url}/teams/${request.teamId}/matches`,
      headers: this.headers,
      params: {
        competition: request.competition ?? '',
      },
    });
    return response.data as MatchesResponse;
  }
}
