import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonHeader,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonCardContent,
} from '@ionic/angular/standalone';
import { CompetitionMatchesRequest } from 'src/app/services/entities/competition.request';
import { CompetitionMatchesResponse } from 'src/app/services/entities/competition.response';
import { FootballdataService } from 'src/app/services/footballdata.service';

@Component({
  selector: 'tab-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonImg,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonItem,
    IonList,
    IonContent,
    IonTitle,
    IonBackButton,
    IonToolbar,
    IonHeader,
  ],
})
export class MatchesComponent implements OnInit {
  public competitionCode: string;
  public filters!: CompetitionMatchesResponse['filters'];
  public resultSet!: CompetitionMatchesResponse['resultSet'];
  public competition!: CompetitionMatchesResponse['competition'];
  public matches!: CompetitionMatchesResponse['matches'];

  constructor(
    private route: ActivatedRoute,
    private footballdata: FootballdataService
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') || '';
  }

  ngOnInit() {
    this.loadMatches();
  }
  loadMatches() {
    this.footballdata
      .CompetitionMatches(
        new CompetitionMatchesRequest({ id: this.competitionCode })
      )
      .then((res: CompetitionMatchesResponse) => {
        this.competition = res.competition;
        this.filters = res.filters;
        this.resultSet = res.resultSet;
        this.matches = res.matches;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

