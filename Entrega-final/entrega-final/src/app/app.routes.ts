import { Routes } from '@angular/router';
import { CompetitionsPage } from './competitions/competitions.page';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard], // Use the authGuard to protect the home route
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'competitions/:competitionCode',
    component: CompetitionsPage,
    canActivateChild: [authGuard], // Use the authGuard to protect child routes
    children: [
      {
        path: 'standings',
        loadComponent: () =>
          import('./competitions/tabs/standings/standings.component').then(
            (m) => m.StandingsComponent
          ),
      },
      {
        path: 'matches',
        loadComponent: () =>
          import('./competitions/tabs/matches/matches.component').then(
            (m) => m.MatchesComponent
          ),
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('./competitions/tabs/teams/teams.component').then(
            (m) => m.TeamsComponent
          ),
      },
      {
        path: 'seasons',
        loadComponent: () =>
          import('./competitions/tabs/seasons/seasons.component').then(
            (m) => m.SeasonsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'matches',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
    canActivate: [authGuard], // Use the authGuard to protect the profile route
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: '**',
    // redirectTo: 'home' // mudar para página de 404
    component: NotfoundComponent,
  },
];
