import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonLabel,
    IonIcon,
    IonItem,
    IonButtons,
    IonList,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonMenuButton,
    RouterLink,
    RouterLinkActive,
    IonMenuToggle,
  ],
})
export class AppComponent {
  constructor() {}
}
