import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonBackButton,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonSegment,
} from '@ionic/angular/standalone';
import { FootballdataService } from 'src/app/services/footballdata.service';
import { ActivatedRoute } from '@angular/router';
import { StandingsResponse } from 'src/app/entities/standings.response';
import { StandingsRequest } from 'src/app/entities/standings.request';
import { environment } from 'src/environments/environment.development';
import { Standings } from 'src/app/MOCKS/standings.mock';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'tab-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  standalone: true,
  imports: [
    IonSegment,
    IonCol,
    IonRow,
    IonGrid,
    IonNote,
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonImg,
    IonCard,
    IonBackButton,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AsyncPipe,
    IonThumbnail,
    RouterLink,
    RouterLinkActive,
  ],
})
export class StandingsComponent implements OnInit {
  public competition?: StandingsResponse['competition'];
  public season?: StandingsResponse['season'];
  public standings?: StandingsResponse['standings'];
  public code: string;
  constructor(
    private footballdata: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.code = this.route.snapshot.paramMap.get('code') || '';
  }

  ngOnInit() {
    this.loadStandings();
  }

  loadStandings() {
    const request = new StandingsRequest(this.code);
    this.footballdata.Standings(request).then((response: StandingsResponse) => {
      this.competition = response.competition;
      this.season = response.season;
      this.standings = response.standings;
    });
  }
}
