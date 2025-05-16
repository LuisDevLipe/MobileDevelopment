import { Component } from '@angular/core';
import {
  IonHeader,
  IonThumbnail,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonNote,
  IonCardContent,
  IonSpinner,
  IonText,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { FootballdataService } from '../services/footballdata.service';
import { Observable } from 'rxjs';
import { Competition } from '../models/Competitions';
import { AsyncPipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSearchbar,
    IonText,
    IonSpinner,
    IonCardContent,
    AsyncPipe,
    RouterLinkActive,
    RouterLink,
    IonNote,
    IonCardTitle,
    IonThumbnail,
    IonCardHeader,
    IonImg,
    IonCard,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage implements OnInit {
  public competitions: Array<Competition>;
  public loaded = false;
  public error = false;
  public errorMessage: any;
  constructor(private footballdata: FootballdataService) {
    this.competitions = [];
  }

  ngOnInit() {
    //   this.footballdata.Competitions().subscribe({
    //     next: (data) => {
    //       this.loaded = true;
    //       this.competitions = data.competitions;
    //     },
    //     error: (error) => {
    //       console.error('Error fetching competitions:', error);
    //       this.loaded = true; // Set loaded to true even if there's an error
    //       this.error = true; // Set error to true
    //       this.errorMessage = JSON.stringify(error, null, 4); // Store the error message
    //     },
    //   });
    this.footballdata
      .Competitions()
      .then((response) => {
        this.loaded = true;
        this.competitions = response.data.competitions;
      })
      .catch((error) => {
        console.error('Error fetching competitions:', error);
        this.loaded = true; // Set loaded to true even if there's an error
        this.error = true; // Set error to true
        this.errorMessage = JSON.stringify(error, null, 4); // Store the error message
        this.competitions = [
          {
            id: 777,
            area: {
              id: 42,
              name: 'Missing',
              flag: 'Debug',
            },
            code: "BSA",
            name: 'Debug',
            emblem: 'https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/301110898_394629719482914_8969787858046179077_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZJA5IRA_Gq8VizeJSK5htJSHfMKWcDAolId8wpZwMCqmKjUEl5M0vnYLP7ySB3mCqyrybXC-osIkAuYD3_6ge&_nc_ohc=qnftKPCGn2wQ7kNvwHbvePy&_nc_oc=Admb6pdSMrAiBk976R1BiY7x29ESUQ63vYEOxcwLFLt-G6rSfx3n1W1-1FMdIv0Q4ew&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=7Zl2e8CaG4P2f_AFVUIdKA&oh=00_AfJ1ObxbTMEztFsTGvkEdlj3pWwpXssICShwVRITwPh-lw&oe=682C912B',
          },
        ] as Array<Competition>;
      });
  }
}

// (data) => {
//   this.loaded = true;
//   this.competitions = data.competitions;
//   }
