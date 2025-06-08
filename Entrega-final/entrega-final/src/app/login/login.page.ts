import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Auth,
  User,
  UserCredential,
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
  IonList,
  IonIcon,
  IonRippleEffect,
  IonInputPasswordToggle,
  IonBackButton,
  IonCard,
  IonText,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonImg,
  IonAlert,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardCircleSharp, logInSharp } from 'ionicons/icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonCard,
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
    IonRippleEffect,
    IonInputPasswordToggle,
    RouterLink,
    RouterLinkActive,
  ],
})
export class LoginPage implements OnInit {
  public emailModel: string = '';
  public passwordModel: string = '';
  public readonly loginErrorButtons = ['OK'];
  public isLoginErrorAlertOpen = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private location: Location
  ) {
    // addIcons({ logInSharp });
    addIcons({ logInSharp, arrowForwardCircleSharp });
  }

  ngOnInit() {}

  onSignIn() {
    signInWithEmailAndPassword(this.auth, this.emailModel, this.passwordModel)
      .then((userCredential: UserCredential) => {
        // Signed in
        const user: User = userCredential.user;
        // console.log('User signed in:', user);
        // Navigate to the home page or any other page
        this.router.navigate(['/home']).then(() => {
          // Optionally, you can also reset the navigation stack
          this.location.replaceState('/home');
        });
      })
      .catch((error: FirebaseError) => {
        console.error('Error signing in:', error.code);
        // Handle error (e.g., show an alert)
        if (error.code === 'auth/network-request-failed') {
          this.onLoginErrorAlert(true, LoginError.NetworkError);
        } else if (error.code === 'auth/missing-password') {
          this.onLoginErrorAlert(true, LoginError.MissingPassword);
        } else if (error.code === 'auth/user-not-found') {
          this.onLoginErrorAlert(true, LoginError.UserNotFound);
        } else if (error.code === 'auth/wrong-password') {
          this.onLoginErrorAlert(true, LoginError.WrongPassword);
        } else if (error.code === 'auth/invalid-email') {
          this.onLoginErrorAlert(true, LoginError.InvalidEmail);
        } else {
          this.onLoginErrorAlert(true, LoginError.Default);
        }
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
  @ViewChild('ionAlert', { static: false })
  ionAlert!: IonAlert;
  onLoginErrorAlert(show: boolean, message?: string) {
    this.isLoginErrorAlertOpen = show;
    if (typeof message !== 'undefined') {
      this.ionAlert.message = message;
    }
  }
}

enum LoginError {
  NetworkError = 'Network error. Please try again later.',
  MissingPassword = 'Please enter your password.',
  UserNotFound = 'Please check your email and password and try again.',
  WrongPassword = 'Please check your email and password and try again.',
  UnexpectedError = 'An unexpected error occurred. Please try again later.',
  InvalidEmail = 'Please enter a valid email address.',
  Default = 'An error occurred. Please try again later.',
}
