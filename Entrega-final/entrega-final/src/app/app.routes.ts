import { Routes } from '@angular/router';
import { CompetitionsPage } from './competitions/competitions.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'competitions/:competitionCode',
    component: CompetitionsPage,
    children: [
      {
        path: 'standings',
        loadChildren: () =>
          import('./competitions/tabs/standings/standings.component').then(
            (m) => m.StandingsComponent
          ),
      },
      {
        path: 'matches',
        loadChildren: () =>
          import('./competitions/tabs/matches/matches.component').then(
            (m) => m.MatchesComponent
          ),
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('./competitions/tabs/teams/teams.component').then(
            (m) => m.TeamsComponent
          ),
      },
      {
        path: 'seasons',
        loadChildren: () =>
          import('./competitions/tabs/seasons/seasons.component').then(
            (m) => m.SeasonsComponent
          ),
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
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
];
