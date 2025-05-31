import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail
} from '@ionic/angular/standalone';
import { FootballdataService } from 'src/app/services/footballdata.service';
import { ActivatedRoute } from '@angular/router';
import { StandingsRequest } from 'src/app/services/entities/competition.request';
import { StandingsResponse } from 'src/app/services/entities/competition.response';
import { RouterLink , RouterLinkActive} from '@angular/router';
@Component({
  selector: 'tab-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonThumbnail,
    RouterLink,
    RouterLinkActive,
  ],
})
export class StandingsComponent implements OnInit {
  public competition?: StandingsResponse['competition'];
  public season?: StandingsResponse['season'];
  public standings?: StandingsResponse['standings'];
  public competitionCode: string;
  constructor(
    private footballdata: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') || '';
  }

  ngOnInit() {
    this.loadStandings();
  }

  loadStandings() {
    this.footballdata
      .Standings(new StandingsRequest({ id: this.competitionCode }))
      .then((response: StandingsResponse) => {
        this.competition = response.competition;
        this.season = response.season;
        this.standings = response.standings;
      })
      .catch((error) => {
        console.error('Error loading standings:', error);
      });
  }
}
