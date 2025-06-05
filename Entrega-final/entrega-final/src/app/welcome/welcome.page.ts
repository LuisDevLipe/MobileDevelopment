import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader
} from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { helpSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonFabButton,
    IonFab,
    IonIcon,
    IonLabel,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class WelcomePage {
  constructor() {
    addIcons({
      helpSharp,
    });
  }
}
