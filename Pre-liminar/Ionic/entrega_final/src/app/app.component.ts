import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonButtons,
  IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menu, cog, personCircleOutline, logoApple, settingsSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonButton, 
    IonIcon,
    IonButtons,
    IonList,
    IonItem,
    IonContent,
    IonToolbar,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonSplitPane,
    IonApp,
    IonRouterOutlet,
    IonMenu,
  ],
})
export class AppComponent {
  constructor() {
    addIcons({menu, cog,personCircleOutline, logoApple, settingsSharp})
  }
}
