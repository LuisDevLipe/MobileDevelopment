import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  IonToggle,
} from '@ionic/angular/standalone';
import { createSharp, cloudySharp, personSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthService } from '../services/fire/auth.service';
import { ToggleCustomEvent } from '@ionic/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
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
  public newUser: any;

  public inputsAreReadonly: boolean;

  constructor(private authService: AuthService) {
    addIcons({ personSharp, cloudySharp, createSharp });
    this.inputsAreReadonly = true; // Default to view mode
    this.newUser = {};
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
  updateProfile() {
    if (this.user.displayName === this.newUser.displayName) {
      return;
    }
    this.authService
      .updateUserProfile(this.newUser.displayName)
      .then(() => {
        this.inputsAreReadonly = true; // Disable edit mode after update
      })
      .catch(console.error)
      .finally(() => {});
  }
  switchEditMode(event: ToggleCustomEvent) {
    const isChecked = event.detail.checked;
    if (isChecked) {
      // Enable edit mode
      this.inputsAreReadonly = false;
    } else {
      // Disable edit mode
      this.inputsAreReadonly = true;
    }
  }
}
