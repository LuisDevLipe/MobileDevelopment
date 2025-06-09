import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionScorersRequest } from 'src/app/services/entities/competition.request';
import { CompetitionScorersResponse } from 'src/app/services/entities/competition.response';
import { FootballdataService } from 'src/app/services/footballdata.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonThumbnail,
  IonImg,
  IonCardSubtitle,
  IonSelect,
  IonSelectOption,
  IonCardContent,
  IonRow,
  IonCol,
  IonText,
  IonGrid,
  IonNote,
  IonLabel,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider, IonSpinner, IonBackButton } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.scss'],
  standalone: true,
  imports: [IonBackButton, IonSpinner, 
    IonItemDivider,
    IonItemGroup,
    IonItem,
    IonList,
    IonLabel,
    IonNote,
    IonGrid,
    IonText,
    IonCol,
    IonRow,
    IonCardContent,
    IonCardSubtitle,
    IonImg,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonMenuButton,
    IonThumbnail,
    IonSelect,
    IonSelectOption,
    DatePipe
  ],
})
export class ScorersComponent implements OnInit {
  public filters: CompetitionScorersRequest['filters'];
  public competitionCode: string;
  public season!: CompetitionScorersResponse['season'];
  public competition!: CompetitionScorersResponse['competition'];
  public scorers!: CompetitionScorersResponse['scorers'];
  constructor(
    private football: FootballdataService,
    private route: ActivatedRoute
  ) {
    this.competitionCode =
      this.route.snapshot.paramMap.get('competitionCode') ?? '';
  }

  ngOnInit() {
    this.getScorers()
      .then((res) => {
        this.season = res.season;
        this.competition = res.competition;
        this.scorers = res.scorers;
        this.filters = res.filters;
      })
      .catch((error) => {
        console.error('Error fetching scorers:', error);
        // Handle the error appropriately, e.g., show a message to the user
      });
  }

  getScorers(): Promise<CompetitionScorersResponse> {
    const request = new CompetitionScorersRequest({
      competitionCode: this.competitionCode,
      filters: this.filters,
    });
    return this.football.CompetitionScorers(request);
  }
  getAge(dob: string): string {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age.toString();
  }
}
