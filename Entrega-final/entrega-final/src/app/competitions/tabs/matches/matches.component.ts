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
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { CompetitionMatchesRequest } from 'src/app/services/entities/competition.request';
import { CompetitionMatchesResponse } from 'src/app/services/entities/competition.response';
import { FootballdataService } from 'src/app/services/footballdata.service';

@Component({
  selector: 'tab-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  standalone: true,
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonText,
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
  public selectedSeasons: string[] = [''];
  public page: number = 1;
  public pageSize: number = 20;

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
        new CompetitionMatchesRequest({
          id: this.competitionCode,
          filters: {
            season: this.selectedSeasons.join(','),
            limit: this.pageSize,
            offset: this.page * this.pageSize - this.pageSize,
            status: ['IN_PLAY', 'FINISHED'].join(','),
            // dateFrom: this.drillDownByDate().dateFrom,
            // dateTo: this.drillDownByDate().dateTo,
          },
        })
      )
      .then((res: CompetitionMatchesResponse) => {
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
}

