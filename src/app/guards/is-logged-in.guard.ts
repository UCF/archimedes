import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn) return true;

  const nextUrl = route.url;

  window.location.href = `${environment.searchServiceUrl}/manager/login/?next=${encodeURI(nextUrl.toString())}`

  return false;
};
