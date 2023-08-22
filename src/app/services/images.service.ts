import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  client: HttpClient;
  config: ConfigService;
  mediaGraphApiUrl!: string;
  mediaGraphApiKey!: string;
  mediaGraphOrgId!: string;

  constructor(
    client: HttpClient,
    config: ConfigService
  ) {
    this.client = client;
    this.config = config;
    this.mediaGraphApiUrl = this.config.mediaGraphApiUrl;
    this.mediaGraphApiKey = this.config.mediaGraphApiKey;
    this.mediaGraphOrgId = this.config.mediaGraphOrgId;
  }

  getImages(query: string, offset: number = 0): Observable<any> {
    if (!query) return new Observable();

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer: ${this.mediaGraphApiKey}`)
      .set('OrganizationId', this.mediaGraphOrgId);

    const params = new HttpParams()
      .set('q', query);

    return this.client.get(
      `${this.mediaGraphApiUrl}/assets/search/`,
      {
        params,
        headers
      }
    );
  }
}
