import { Component } from '@angular/core';
import {
  IonHeader,
  IonThumbnail,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonImg,
  IonCardTitle,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonNote,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonCard,
  IonText,
  IonListHeader,
  IonItemGroup,
  IonItemDivider,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp, homeSharp, arrowDownSharp } from 'ionicons/icons';
import { FootballdataService } from '../services/footballdata.service';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { CompetitionsRequest } from 'src/app/services/entities/competition.request';
import { CompetitionsResponse } from '../services/entities/competition.response';
import { RefresherCustomEvent, SearchbarCustomEvent } from '@ionic/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonRefresherContent,
    IonRefresher,
    IonItemDivider,
    IonItemGroup,
    IonListHeader,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonNote,
    IonLabel,
    IonIcon,
    IonButtons,
    IonSearchbar,
    RouterLink,
    RouterLinkActive,
    IonCardTitle,
    IonThumbnail,
    IonImg,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AsyncPipe,
    IonMenuButton,
    RouterLink,
    IonRouterLink,
  ],
})
export class HomePage implements OnInit {
  public competitions!: CompetitionsResponse['competitions'];
  constructor(private footballdata: FootballdataService) {
    this.loadCompetitions();
  }

  ngOnInit() {
    addIcons({
      peopleCircleSharp,
      helpCircleSharp,
      homeSharp,
      arrowDownSharp
    });
  }
  loadCompetitions(event?: RefresherCustomEvent) {
    this.footballdata
      .Competitions({} as CompetitionsRequest)
      .then((response: CompetitionsResponse) => {
        this.competitions = response.competitions;
      })
      .catch()
      .finally(() => {
        (event?.target as HTMLIonRefresherElement)?.complete();
      });
  }

  onSearchInput(event: SearchbarCustomEvent) {
    const searchTerm = event.detail.value?.toLowerCase();
    if (
      typeof searchTerm === 'undefined' ||
      searchTerm === null ||
      searchTerm.trim() === ''
    ) {
      return;
    }
    this.footballdata
      .Competitions({})
      .then((response: CompetitionsResponse) => {
        this.competitions = response.competitions.filter((competition) => {
          return (
            competition.name.toLowerCase().includes(searchTerm) ||
            competition.area.name.toLowerCase().includes(searchTerm) ||
            competition.code.toLowerCase().includes(searchTerm) ||
            competition.type.toLowerCase().includes(searchTerm)
          );
        });
      })
      .catch()
      .finally(() => {
        if (this.competitions.length === 0) {
          // Show a message and ask to refresh the list by pulling down
        }
      });
  }

  ionViewWillEnter() {}
}
