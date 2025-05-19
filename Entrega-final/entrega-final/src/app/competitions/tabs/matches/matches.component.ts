import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonHeader,
} from '@ionic/angular/standalone';
import { FootballdataService } from 'src/app/services/footballdata.service';
import { MatchesResponse } from 'src/app/entities/matches.response';

@Component({
  selector: 'tab-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonBackButton, IonToolbar, IonHeader],
})
export class MatchesComponent implements OnInit {
  public competitionCode: string;
  public teamId: number;
  public metadata?: MatchesResponse['resultSet'];
  public matches?: MatchesResponse['matches'];
  constructor(
    private route: ActivatedRoute,
    private footballdata: FootballdataService
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') || '';
    this.teamId = Number(this.route.snapshot.paramMap.get('teamId')) || 0;
    this.footballdata
      .Matches({ teamId: this.teamId, competition: this.competitionCode })
      .then((response) => {
        this.metadata = response.resultSet;
        this.matches = response.matches;
      });
  }

  ngOnInit() {}
}
