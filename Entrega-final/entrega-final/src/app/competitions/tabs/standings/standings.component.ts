import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonBackButton,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { FootballdataService } from 'src/app/services/footballdata.service';

@Component({
  selector: 'tab-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonImg,
    IonCard,
    IonBackButton,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class StandingsComponent implements OnInit {
  public competition: any;

  constructor(private footballdata: FootballdataService) {}

  ngOnInit() {}
}
