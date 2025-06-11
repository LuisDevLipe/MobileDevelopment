import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  User,
  user,
  updateProfile,
  updatePhoneNumber,
  getAuth,
} from '@angular/fire/auth';
import { GuardResult, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly authState: Observable<User | null>;
  public readonly user: Observable<User | null>;

  constructor(private auth: Auth, private router: Router) {
    this.authState = authState(this.auth);
    this.user = user(this.auth);
  }

  canActivate(): Observable<GuardResult> {
    return new Observable<GuardResult>((subscribe) => {
      this.authState.subscribe({
        next: (user: User | null) => {
          if (user) {
            subscribe.next(true);
          } else {
            subscribe.next(this.router.createUrlTree(['/welcome']));
          }
        },
        error: (error) => {
          console.error('Error checking authentication state:', error);
          subscribe.next(this.router.createUrlTree(['/welcome']));
        },
        complete: () => {
          subscribe.complete();
        },
      });
    });
  }

  getUser(): Observable<User | null> {
    return this.user;
  }
  updateUserProfile(displayName = '', photoURL = ''): Promise<void> {
    const auth = getAuth();
    if (auth.currentUser === null) {
      return Promise.reject('No user is currently signed in.');
    }
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  }
}
