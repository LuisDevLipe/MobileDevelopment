import { Component } from '@angular/core';
// import { IonCardContent } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCardSubtitle,
  IonCard,
  IonCardContent,
  IonCardHeader
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle,
    IonTitle,
    IonCard,
    IonCardContent,
    IonCardHeader
  ],
})
export class HomePage {
  constructor() {}
}
