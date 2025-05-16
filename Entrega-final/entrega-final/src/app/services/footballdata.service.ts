import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Competition } from '../models/Competitions';
import { Observable } from 'rxjs';

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

  Competitions(id?: number, subResource?: string, competition?: string) {
    if (competition) {
      return CapacitorHttp.get({
        url: `${this.url}/competitions/${competition}`,
        headers: this.headers,
      });
    }
    if (id && subResource) {
      return CapacitorHttp.get({
        url: `${this.url}/competitions/${id}/${subResource}`,
        headers: this.headers,
      });
    }
    if (id) {
      return CapacitorHttp.get({
        url: `${this.url}/competitions/${id}`,
        headers: this.headers,
      });
    }

    return CapacitorHttp.get({
      url: `${this.url}/competitions`,
      headers: this.headers,
    });
  }
}
