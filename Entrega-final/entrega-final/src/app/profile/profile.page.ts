import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  IonLabel, IonText, IonImg } from '@ionic/angular/standalone';
import { Auth, authState } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonImg, IonText,
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

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    authState(this.auth).subscribe({
      next: (user) => {
        this.user = user;
        this.dataLoaded = true;
        console.log('User data:', this.user);
        if (user === null){
          console.warn('No user is currently signed in.');
          this.dataLoaded = false;
          this.router.navigate(['/login']).catch((error) => {
            console.error('Error navigating to login:', error);
          })
        }
      },  
      error: (error) => {
        console.error('Error fetching user data:', error);
        this.dataLoaded = false;
      },
    });
  }
  ionViewDidLeave() {
    this.user = null;
    this.dataLoaded = false;
  }
}
