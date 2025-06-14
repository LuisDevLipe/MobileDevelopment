import { Component, OnInit } from '@angular/core';
import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonBackButton,
  IonContent,
  IonButtons,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonRippleEffect,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
  standalone: true,
  imports: [
    IonRippleEffect,
    IonIcon,
    IonButton,
    IonLabel,
    IonItem,
    IonButtons,
    IonContent,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonTitle,
  ],
})
export class NotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
