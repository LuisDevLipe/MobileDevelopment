import { Component } from '@angular/core';
import {
  IonHeader,
  IonThumbnail,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonImg,
  IonCardTitle,
  IonSearchbar,
  IonButtons,
<<<<<<< HEAD
  IonMenuButton,
=======
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp } from 'ionicons/icons';
import { FootballdataService } from '../services/footballdata.service';
import { OnInit } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { CompetitionsRequest } from 'src/app/services/entities/competition.request';
import { CompetitionsResponse } from '../services/entities/competition.response';
=======
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { CompetitionRequest } from 'src/app/services/entities/competition.request';
import {
  CompetitionResponse,
  CompetitionsResponse,
} from '../services/entities/competition.response';
import { Auth, authState } from '@angular/fire/auth';
import { Location } from '@angular/common';
import { league_codes } from '../services/lookup-tables/league-codes';
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButtons,
    IonSearchbar,
    RouterLink,
    RouterLinkActive,
    IonCardTitle,
    IonThumbnail,
    IonImg,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AsyncPipe,
    IonMenuButton,
    RouterLink,
    IonRouterLink,
  ],
})
export class HomePage implements OnInit {
<<<<<<< HEAD
  public competitions: Promise<CompetitionsResponse>;
  constructor(private footballdata: FootballdataService) {
=======
  public competitions: Promise<CompetitionsResponse | CompetitionResponse>;
  constructor(
    private footballdata: FootballdataService,
    private router: Router,
    private auth: Auth,
    private location: Location
  ) {
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
    this.competitions = this.footballdata.Competitions(
      new CompetitionsRequest({})
    );
  }

  ngOnInit() {
    addIcons({
      peopleCircleSharp,
      helpCircleSharp,
    });
    authState(this.auth).subscribe({
      next: (user) => {
        if (user === null) {
          console.warn('No user is currently signed in.');
          this.router.navigate(['/welcome']).catch((error) => {
            console.error('Error navigating to login:', error);
            this.location.back();
          });
        }
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      },
    });
  }

  onSearchInput(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm && searchTerm.trim() !== '') {
      const matchCodes = league_codes.filter((league) => {
        return (
          league.country_continent
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          league.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
          league.league_code.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      if (matchCodes.length > 0) {
        this.competitions = new Promise<CompetitionsResponse>(
          async (resolve, reject) => {
            resolve({
              count: matchCodes.length,
              filters: {},
              competitions: (
                await this.competitions
              ).competitions.filter() as CompetitionsResponse['competitions'],
            });
          }
        );
      }
    }
  }

  ionViewWillEnter() {}
}
