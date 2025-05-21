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
} from '@ionic/angular/standalone';
import { FootballdataService } from '../services/footballdata.service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Competition } from '../MOCKS/competition.mock';
import { CompetitionRequest } from 'src/app/services/entities/competition.request';
import { CompetitionResponse } from '../services/entities/competition.response';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
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
  ],
})
export class HomePage implements OnInit {
  public competitions: Promise<CompetitionResponse[]>;
  constructor(private footballdata: FootballdataService) {
    this.competitions = this.footballdata.Competitions(
      new CompetitionRequest()
    );
    this.competitions.then((data) => {
      console.log(data);
    });
  }

  ngOnInit() {}
}