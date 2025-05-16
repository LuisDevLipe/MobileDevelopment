import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonBackButton, IonCard, IonCardContent, IonCardHeader, IonImg, IonCardTitle, IonCardSubtitle, IonTabs, IonTabButton, IonLabel, IonIcon, IonTabBar, IonTab } from '@ionic/angular/standalone';
import { FootballdataService } from '../services/footballdata.service';
import { competition } from '../MOCKS/competition.mock';
import { ActivatedRoute } from '@angular/router';
import {addIcons} from 'ionicons';
import { trophy, football, calendar, people } from 'ionicons/icons';
import { StandingsComponent } from './tabs/standings/standings.component';
import { SeasonsComponent } from './tabs/seasons/seasons.component';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
  standalone: true,
  imports: [IonTab, IonTabBar, IonIcon, IonLabel, IonTabButton, IonTabs, IonCardSubtitle, IonCardTitle, IonImg, IonCardHeader, IonCardContent, IonCard, IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, StandingsComponent, SeasonsComponent],
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
      people
    });
    this.footballdata
      .Competitions(this.id)
      .then((data) => {
        this.competition = data;
      })
      .catch((error) => {
        this.competition = competition;
      });
  }
}
