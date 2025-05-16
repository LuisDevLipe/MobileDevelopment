import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonContent, IonTitle, IonHeader, IonToolbar, IonCardHeader, IonCard, IonBackButton } from "@ionic/angular/standalone";
import { DatePipe } from '@angular/common';
import { FootballdataService } from '../../../services/footballdata.service';
import {ActivatedRoute} from '@angular/router';
import { competition } from 'src/app/MOCKS/competition.mock';
@Component({
  selector: 'tab-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
  standalone: true,
  imports: [IonBackButton, IonCard, IonCardHeader, 
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonContent,
    IonTitle,
    IonHeader,
    IonToolbar,
    DatePipe
  ]
})
export class SeasonsComponent  implements OnInit {
  public competitionId: number;
  public competition: any;
  public seasons: any;
  public currentSeason: any;
  constructor(private footballdata:FootballdataService , private route: ActivatedRoute) {
    this.competitionId = this.route.snapshot.params['code'];
  }

  ngOnInit() {
    this.footballdata.Competitions(this.competitionId, 'seasons').then((data: any) => {
      this.competition = data;
      this.seasons = data.seasons;
      this.currentSeason = data.currentSeason;
    }).catch(error => {
      this.competition = competition
    })
  }
}
