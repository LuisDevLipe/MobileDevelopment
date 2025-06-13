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
  IonThumbnail,
  IonItem,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonLabel,
  IonNote,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonImg,
  IonSpinner,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { FootballdataService } from 'src/app/services/footballdata.service';
import { ActivatedRoute } from '@angular/router';
import {
  CompetitionRequest,
  CompetitionsRequest,
  StandingsRequest,
} from 'src/app/services/entities/competition.request';
import {
  CompetitionResponse,
  CompetitionsResponse,
  StandingsResponse,
} from 'src/app/services/entities/competition.response';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SelectCustomEvent } from '@ionic/core';
@Component({
  selector: 'tab-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonImg,
    IonList,
    IonCardContent,
    IonCardSubtitle,
    IonNote,
    IonLabel,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonItem,
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
    IonSelect,
    IonSelectOption,
    DatePipe,
  ],
})
export class StandingsComponent implements OnInit {
  public competition!: StandingsResponse['competition'];
  public season!: StandingsResponse['season'];
  public standings!: StandingsResponse['standings'];
  public competitionCode: string;
  public seasons: CompetitionResponse['seasons'];
  public filters!: StandingsResponse['filters'];
  constructor(
    private footballdata: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') || '';
    this.seasons = [];
  }

  ngOnInit() {
    this.loadStandings();
    this.loadSeasons();
  }

  loadStandings(filters?: StandingsRequest['filters']) {
    const request = new StandingsRequest({
      id: this.competitionCode,
      filters: {
        ...filters,
      },
    });
    this.footballdata
      .Standings(request)
      .then((response: StandingsResponse) => {
        this.competition = response.competition;
        this.season = response.season;
        this.standings = response.standings;
        this.filters = response.filters;
      })
      .catch((error) => {
        console.error('Error loading standings:', error);
      });
  }

  loadSeasons() {
    // console.log('seasons', this.selectedSeason, this.seasons);
    const competitionRequest = new CompetitionRequest({
      competitionCode: this.competitionCode,
    });
    this.footballdata
      .Competition(competitionRequest)
      .then((res: CompetitionResponse) => {
        // console.log(res.seasons);
        this.seasons = res.seasons.sort((a, b) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          return dateB.getTime() > dateA.getTime() ? 1 : -1;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  onSeasonChange(event: SelectCustomEvent) {
    this.filters.season = event.detail.value;
    this.loadStandings(this.filters);
  }
}
