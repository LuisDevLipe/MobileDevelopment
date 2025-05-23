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
import { CompetitionRequest } from 'src/app/services/entities/competition.request';
import { CompetitionResponse } from '../services/entities/competition.response';

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
  public competitions: Promise<CompetitionResponse[]>;
  constructor(private footballdata: FootballdataService) {
    this.competitions = this.footballdata.Competitions(
      new CompetitionRequest()
    );
  }

  ngOnInit() {
    addIcons({
      peopleCircleSharp,
      helpCircleSharp,
    });
  }
}
