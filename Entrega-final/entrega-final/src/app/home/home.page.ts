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
  IonNote,
  IonSearchbar,
  IonMenu,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp } from 'ionicons/icons';
import { FootballdataService } from '../services/footballdata.service';
import { OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {IonRouterLink} from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { CompetitionRequest, CompetitionsRequest } from 'src/app/services/entities/competition.request';
import { CompetitionResponse, CompetitionsResponse } from '../services/entities/competition.response';
import { Auth, authState } from '@angular/fire/auth';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButtons,
    IonLabel,
    IonIcon,
    IonSearchbar,
    RouterLink,
    IonNote,
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
    IonMenu,
    IonMenuButton,
    RouterLink,
    IonRouterLink,
    RouterLinkActive,
  ],
})
export class HomePage implements OnInit {
  public competitions: Promise<CompetitionsResponse>;
  constructor(
    private footballdata: FootballdataService,
    private auth: Auth,
    private location: Location,
    private router: Router
  ) {
    this.competitions = this.footballdata.Competitions(
      new CompetitionsRequest({})
    );
  }

  ngOnInit() {
    addIcons({
      peopleCircleSharp,
      helpCircleSharp,
    });
  }

  ionViewWillEnter() {
    authState(this.auth).subscribe({
      next: (user) => {
        console.log(user);
        if (user !== null) {
          // User is signed in leave him here.
          return;
          
        } else {
          // user is not signed in leave him here.
          this.router.navigate(['welcome']);
          return;
        }
      },
      error: (e) => {
        // Something Ocurred probably a network issue.
        // redirect to the welcome page
        // it will then be checked there for the auth state again
        console.error(e);
        this.router.navigate(['welcome']);
        // if the user cant be verified, than we should probably evict
        // not exposing the app data which could contain sensitive data
      },
    });
  }
}
