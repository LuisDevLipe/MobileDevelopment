import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanActivateChildFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/services/fire/auth.service';
import { inject } from '@angular/core';

const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  return authService.canActivate();
};

const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  return authService.canActivate();
};

export { authGuard, authChildGuard };
