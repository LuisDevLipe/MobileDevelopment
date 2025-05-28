import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import { Location } from '@angular/common';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class WelcomePage implements OnInit {
  public user!: User;
  constructor(
    private auth: Auth,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    authState(this.auth).subscribe({
      next: (user) => {
        if (user !== null) {
          // User is signed in, shouldn't be here in the welcome page
          // Pop back the last history state or redirect home
          this.location.back();
          // fallback if there's nothing in the stack
          this.router.navigate(['/home']);
        } else {
          // User is signed out, redirect to welcome page
          this.router.navigate(['/welcome']);
        }
      },
      error: (e) => {
        // send some telemetry data like every big company does without your consent...
        console.error(e);
      },
    });
  }
}
