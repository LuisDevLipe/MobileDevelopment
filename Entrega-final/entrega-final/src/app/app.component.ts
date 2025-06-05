import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
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
import { personSharp, helpSharp, logOutSharp, homeSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
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
export class AppComponent implements OnInit {
  constructor(private router: Router, private auth: Auth) {}
  ngOnInit() {
    addIcons({
      homeSharp,
      personSharp,
      helpSharp,
      logOutSharp,
    });
  }

  onLogOut() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/welcome']).catch((error) => {
        console.error('Error during sign out:', error);
      });
    });
  }

}
