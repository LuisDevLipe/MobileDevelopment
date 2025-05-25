import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton
} from '@ionic/angular/standalone';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {IonRouterLink} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp, homeSharp } from 'ionicons/icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
      IonMenu,
  IonMenuButton,
  RouterLink,
  IonRouterLink,
  RouterLinkActive
  ],
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit() {
    addIcons({
      peopleCircleSharp,
      helpCircleSharp,
      homeSharp,
    });
  }
}
