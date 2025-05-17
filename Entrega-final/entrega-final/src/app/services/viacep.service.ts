import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { CapacitorHttpPlugin } from '@capacitor/core/types/core-plugins';
import { Inject } from '@angular/core';
import { CepRequest } from '../entities/cep.request';
import { CepResponse } from '../entities/cep.response';
@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  private http: typeof CapacitorHttp;
  private url: string;
  private headers: {};
  constructor() {
    this.http = Inject(CapacitorHttp);
    this.url = 'https://viacep.com.br/ws';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  async getAddress(cep: CepRequest): Promise<CepResponse> {
    try {
      const response = await this.http.get({
        url: this.urler([this.url, cep.Cep, 'json']),
        headers: this.headers,
      });
      return response.data as CepResponse;
    } catch (error) {
      throw new Error('Error fetching address.');
    }
  }

  urler(parts: string[]) {
    return parts.join('/');
  }
}
