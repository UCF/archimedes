import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../interfaces/app-config';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig!: AppConfig;

  constructor(
    private client: HttpClient,
  ) { }

  loadAppConfig(): Observable<AppConfig> {
    return this.client.get<AppConfig>(
      `${environment.searchServiceUrl}/settings/`,
      {
        withCredentials: true
      }).pipe(
      map(res => res),
      tap(configData => (this.appConfig = configData))
    );
  }

  get eventsApiUrl(): string {
    return this.appConfig.ucf_events_api;
  }

  get mediaGraphApiUrl(): string {
    return this.appConfig.ucf_mediagraph_api_url;
  }

  get mediaGraphApiKey(): string {
    return this.appConfig.ucf_mediagraph_api_key;
  }

  get mediaGraphOrgId(): string {
    return this.appConfig.ucf_mediagraph_org_id;
  }

  get newsApiUrl(): string {
    return this.appConfig.ucf_news_api;
  }

  get programApiUrl(): string {
    return this.appConfig.ucf_search_service_api;
  }
}
