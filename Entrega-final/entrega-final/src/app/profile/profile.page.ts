import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from 'firebase/auth';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonText,
  IonImg,
  IonAvatar,
  IonInput,
  IonIcon,
  IonNote,
  IonButton,
  IonRippleEffect,
} from '@ionic/angular/standalone';
import { createSharp, cloudySharp, personSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthService } from '../services/fire/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonRippleEffect,
    IonButton,
    IonNote,
    IonIcon,
    IonInput,
    IonAvatar,
    IonImg,
    IonText,
    IonLabel,
    IonItemDivider,
    IonItemGroup,
    IonItem,
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
  ],
})
export class ProfilePage implements OnInit {
  public user!: any;
  public dataLoaded: boolean = false;

  constructor(private authService: AuthService) {
    addIcons({ personSharp, cloudySharp, createSharp });
  }

  ngOnInit() {
    this.authService.getUser().subscribe({
      next: (user: User | null) => {
        this.user = user;
        this.dataLoaded = true;
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
        this.dataLoaded = false;
      },
    });
  }
  updateProfile() {}
}
