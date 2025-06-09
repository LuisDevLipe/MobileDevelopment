import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonTabBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophy, football, calendar, people, flame, flameSharp, peopleSharp } from 'ionicons/icons';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonIcon, IonLabel, IonTabButton, IonTabs],
})
export class CompetitionsPage {
  constructor() {
    addIcons({trophy,football,peopleSharp,flameSharp,people,flame,calendar});
  }
}
