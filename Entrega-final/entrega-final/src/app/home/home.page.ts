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
  IonMenuButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp } from 'ionicons/icons';
import { FootballdataService } from '../services/footballdata.service';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { CompetitionsRequest } from 'src/app/services/entities/competition.request';
import { CompetitionsResponse } from '../services/entities/competition.response';
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
  public competitions: Promise<CompetitionsResponse>;
  constructor(private footballdata: FootballdataService) {
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

  ionViewWillEnter() {}
}
