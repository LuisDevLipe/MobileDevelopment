import { Component, OnInit } from '@angular/core';
import {
  IonTabs,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonTabBar,
  IonTab,
} from '@ionic/angular/standalone';
import { FootballdataService } from '../services/footballdata.service';
import { Competition } from '../MOCKS/competition.mock';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { trophy, football, calendar, people } from 'ionicons/icons';
import { StandingsComponent } from './tabs/standings/standings.component';
import { SeasonsComponent } from './tabs/seasons/seasons.component';
import { MatchesComponent } from './tabs/matches/matches.component';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
  standalone: true,
  imports: [
    IonTab,
    IonTabBar,
    IonIcon,
    IonLabel,
    IonTabButton,
    IonTabs,
    StandingsComponent,
    SeasonsComponent,
    MatchesComponent,
  ],
})
export class CompetitionsPage implements OnInit {
  public id: number;
  public competition: any;
  constructor(
    private footballdata: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['code'];
  }

  ngOnInit() {
    addIcons({
      trophy,
      football,
      calendar,
      people,
    });
    this.footballdata
      .Competitions(this.id)
      .then((data) => {
        this.competition = data;
      })
      .catch((error) => {
        this.competition = Competition;
      });
  }
}
