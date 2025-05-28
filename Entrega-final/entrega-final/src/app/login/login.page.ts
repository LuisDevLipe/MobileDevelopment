import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Auth,
  User,
  authState,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonMenuButton,
  IonList,
  IonIcon,
  IonRippleEffect,
  IonInputPasswordToggle,
  IonBackButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardCircleSharp, logInSharp } from 'ionicons/icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonIcon,
    IonList,
    IonButtons,
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonRippleEffect,
    IonInputPasswordToggle,
    RouterLink,
    RouterLinkActive,
  ],
})
export class LoginPage implements OnInit {
  public emailModel: string = '';
  public passwordModel: string = '';

  constructor(
    private auth: Auth,
    private router: Router,
    private location: Location
  ) {
    // addIcons({ logInSharp });
    addIcons({ logInSharp, arrowForwardCircleSharp });
  }

  ngOnInit() {
    // Add the logIn icon to the Ionicons library

    authState(this.auth).subscribe({
      next: (user) => {
        console.log(user);
        if (user !== null) {
          // User is signed in, redirect back in the history, fallback to homepage
          this.location.back();
          this.router.navigate(['/home']);
        } else {
          // user is not signed in leave him here.
          return;
        }
      },
      error: (e) => {
        // Something Ocurred probably a network issue.
        // redirect to the welcome page
        // it will then be checked there for the auth state again
        console.error(e);
        this.router.navigate(['welcome']);
        // if the user cant be verified, than we should probably evict
        // not exposing the app data which could contain sensitive data
      },
    });
  }

  onSignIn() {
    signInWithEmailAndPassword(this.auth, this.emailModel, this.passwordModel)
      .then((userCredential) => {
        // Signed in
        const user: User = userCredential.user;
        console.log('User signed in:', user);
        // Navigate to the home page or any other page
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        // Handle error (e.g., show an alert)
      });
  }
  @ViewChild('ionEmailInputEl', { static: true })
  ionEmailInputEl!: IonInput;
  onEmailInput(event: CustomEvent) {
    const filteredValue = (event.target as HTMLIonInputElement).value ?? '';
    this.ionEmailInputEl.value = this.emailModel = filteredValue as string;
  }

  @ViewChild('ionPasswordInputEl', { static: true })
  ionPasswordInputEl!: IonInput;
  onPasswordInput(event: CustomEvent) {
    const filteredValue = (event.target as HTMLIonInputElement).value ?? '';
    this.ionPasswordInputEl.value = this.passwordModel =
      filteredValue as string;
  }
}
