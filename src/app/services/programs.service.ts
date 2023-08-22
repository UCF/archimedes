import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Program, ProgramAPIResults } from '../interfaces/programs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  client: HttpClient;
  config: ConfigService;
  programApiUrl!: string;

  constructor(
    client: HttpClient,
    config: ConfigService
  ) {
    this.client = client;
    this.config = config;
    this.programApiUrl = this.config.programApiUrl;
  }

  getPrograms(query: string, offset: number = 0): Observable<ProgramAPIResults> {
    const params = new HttpParams()
      .set('format', 'json')
      .set('search', query)
      .set('limit', 5)
      .set('offset', offset);

    return this.client.get<ProgramAPIResults>(
      `${this.programApiUrl}/programs/search/`,
      {
        params
      }
    )
  }
}
