import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonHeader,
  IonChip,
  IonAvatar,
  IonImg,
  IonCard,
  IonItem,
  IonCardContent,
  IonList,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';
import { CompetitionTeamsRequest } from 'src/app/services/entities/competition.request';
import { CompetitionTeamsResponse } from 'src/app/services/entities/competition.response';
import { FootballdataService } from 'src/app/services/footballdata.service';

@Component({
  selector: 'tab-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonLabel,
    IonList,
    IonCardContent,
    IonItem,
    IonCard,
    IonImg,
    IonAvatar,
    IonChip,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonContent,
  ],
})
export class TeamsComponent implements OnInit {
  public readonly competitionCode: string | number;
  public competition!: CompetitionTeamsResponse['competition'];
  public teams!: CompetitionTeamsResponse['teams'];
  public season!: CompetitionTeamsResponse['season'];
  constructor(
    private football: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.competitionCode = this.route.snapshot.params['competitionCode'];
  }

  ngOnInit() {
    this.football
      .CompetitionTeams(
        new CompetitionTeamsRequest({ competitionCode: this.competitionCode })
      )
      .then((res) => {
        // console.log(res)
        this.competition = res.competition;
        this.teams = res.teams;
        this.season = res.season;
      });
  }
}
