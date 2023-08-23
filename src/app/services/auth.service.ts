import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;

  constructor(
    private client: HttpClient
  ) { }

  get isLoggedIn(): boolean {
    return this.user !== undefined || this.user;
  }

  getLoggedInUser(): Observable<User> {
    const retval = this.client.get<User>(`${environment.searchServiceUrl}/user/current/`, {
      withCredentials: true
    });

    retval.subscribe({
      next: (user: User) => {
        if (user.id) this.user = user;
      }
    })

    return retval;
  }
}
