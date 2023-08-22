import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../interfaces/app-config';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig!: AppConfig;

  constructor(
    private client: HttpClient,
  ) { }

  loadAppConfig(router: Router): Observable<AppConfig> {
    const retval = this.client.get<AppConfig>(
      `${environment.searchServiceUrl}/settings/`,
      {
        withCredentials: true
      }).pipe(
      map(res => res),
      tap(configData => (this.appConfig = configData))
    );

    retval.subscribe({
      error: (error) => {
        console.error("There was an error getting the settings.. Redirecting to login");
        window.location.href =
          `${environment.searchServiceUrl}/manager/login/?next=${router.url}`;
      }
    });

    return retval;
  }

  get initialized(): boolean {
    return typeof(this.appConfig) !== 'undefined';
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
