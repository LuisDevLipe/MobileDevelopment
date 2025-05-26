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
import { logInSharp, rocketSharp, logOutSharp } from 'ionicons/icons';
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
      logInSharp,
      rocketSharp,
      logOutSharp,
    });
  }

  onLogOut() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']).catch((error) => {
        console.error('Error during sign out:', error);
      });
    });
  }
  
}
