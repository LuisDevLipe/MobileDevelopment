import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
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
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonNote,
  IonThumbnail,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import {
  CompetitionMatchesRequest,
  CompetitionRequest,
} from 'src/app/services/entities/competition.request';
import {
  CompetitionMatchesResponse,
  CompetitionResponse,
} from 'src/app/services/entities/competition.response';
import { FootballdataService } from 'src/app/services/footballdata.service';
import { MatchStatuses } from 'src/app/services/enums/match.status';
@Component({
  selector: 'tab-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  standalone: true,
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonNote,
    IonLabel,
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
    IonSelect,
    IonSelectOption,
    IonThumbnail,
    DatePipe,
  ],
})
export class MatchesComponent implements OnInit {
  public competitionCode: string;
  public filters!: CompetitionMatchesResponse['filters'];
  public resultSet!: CompetitionMatchesResponse['resultSet'];
  public competition!: CompetitionMatchesResponse['competition'];
  public matches!: CompetitionMatchesResponse['matches'];
  public selectedSeason?: string;
  public seasons!: CompetitionResponse['seasons'];
  public selectedStatus: string[] = ['IN_PLAY', 'FINISHED'];
  public page: number = 1;
  public pageSize: number = 20;
  public readonly matchStatuses: string[] = Object.keys(MatchStatuses);

  constructor(
    private route: ActivatedRoute,
    private footballdata: FootballdataService
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') || '';
  }

  ngOnInit() {
    this.loadSeasons();
    this.loadMatches({
      season: this.selectedSeason,
      limit: this.pageSize,
      offset: this.page * this.pageSize - this.pageSize,
      status: this.selectedStatus.join(','),
      // dateFrom: this.drillDownByDate().dateFrom,
      // dateTo: this.drillDownByDate().dateTo,
    });
  }
  loadMatches(filters?: CompetitionMatchesRequest['filters']) {
    // console.log(this.selectedStatus);
    this.footballdata
      .CompetitionMatches(
        new CompetitionMatchesRequest({
          id: this.competitionCode,
          filters,
        })
      )
      .then((res: CompetitionMatchesResponse) => {
        // console.log(res);
        this.competition = res.competition;
        this.filters = res.filters;
        this.resultSet = res.resultSet;
        this.matches = res.matches.sort((a, b) => {
          const dateA = new Date(a.utcDate);
          const dateB = new Date(b.utcDate);
          return dateA.getTime() + dateB.getTime();
        });
        this.page = this.page++;
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(this.seasons, this.selectedSeason);
  }

  drillDownByDate(date?: string) {
    const dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 7);
    const dateFrom = new Date();
    dateFrom.setDate(dateFrom.getDate() - 365);
    return {
      dateFrom: dateFrom.toISOString().split('T')[0],
      dateTo: dateTo.toISOString().split('T')[0],
    };
  }
  paginate(event: InfiniteScrollCustomEvent) {
    this.page = this.page++;
    event.target.complete();
  }

  onSeasonChange(event: CustomEvent) {
    // console.log(event);
    if (event.type === 'ionChange') {
      this.selectedSeason = (event.target as HTMLIonSelectElement).value;
      // console.log(this.selectedSeason);
      this.loadMatches({
        dateFrom: '',
        dateTo: '',
        season: this.selectedSeason,
        offset: this.page * this.pageSize - this.pageSize,
        limit: this.pageSize,
        status: this.selectedStatus.join(','),
      } as CompetitionMatchesRequest['filters']);
    }
  }

  onMatchStatusChange(event: CustomEvent) {
    // console.log(event);
    if (event.type === 'ionChange') {
      this.selectedStatus = (event.target as HTMLIonSelectElement).value;
      this.loadMatches({
        dateFrom: '',
        dateTo: '',
        season: this.selectedSeason,
        offset: this.page * this.pageSize - this.pageSize,
        limit: this.pageSize,
        status: this.selectedStatus.join(','),
      } as CompetitionMatchesRequest['filters']);
    }
  }

  loadSeasons() {
    // console.log('seasons', this.selectedSeason, this.seasons);
    const competitionRequest = new CompetitionRequest({
      competitionCode: this.competitionCode,
    });
    this.footballdata
      .Competition(competitionRequest)
      .then((res) => {
        // console.log(res.seasons);
        this.seasons = res.seasons.sort((a, b) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          return dateB.getTime() - dateA.getTime();
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
