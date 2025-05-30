import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonHeader,
  IonChip,
  IonAvatar,
  IonImg,
  IonCard,
  IonItem,
  IonCardContent,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'tab-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonCardContent,
    IonItem,
    IonCard,
    IonImg,
    IonAvatar,
    IonChip,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonContent,
  ],
})
export class TeamsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
