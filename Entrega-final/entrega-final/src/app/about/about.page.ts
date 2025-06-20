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
  IonMenuButton,
  IonItemGroup,
  IonItemDivider,
  IonThumbnail,
  IonImg,
  IonNote, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleCircleSharp, helpCircleSharp, homeSharp } from 'ionicons/icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, 
    IonNote,
    IonImg,
    IonItemDivider,
    IonItemGroup,
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
    IonThumbnail,
    IonMenu,
    IonMenuButton,
    RouterLink,
    IonRouterLink,
    RouterLinkActive,
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
