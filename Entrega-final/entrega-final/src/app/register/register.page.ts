import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonLabel,
  IonInputPasswordToggle,
  IonRippleEffect,
  IonButtons,
  IonItem,
  IonList,
  IonBackButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonText,
  IonImg,
  IonAlert,
} from '@ionic/angular/standalone';
import {
  eyeSharp,
  rocketSharp,
  arrowForwardCircleSharp,
  closeSharp,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonImg,
    IonText,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonBackButton,
    IonList,
    IonItem,
    IonButtons,
    IonRippleEffect,
    IonLabel,
    IonIcon,
    IonButton,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInputPasswordToggle,
    RouterLink,
    RouterLinkActive,
  ],
})
export class RegisterPage implements OnInit {
  public email: string = '';
  public inputModel: string = '';
  public passwordModel: string = '';
  public password: string = '';
  public isRegistrationErrorAlertOpen: boolean = false;
  public readonly registrationErrorButtons = ['OK'];

  constructor(
    private auth: Auth,
    private router: Router,
    private location: Location
  ) {
    addIcons({ rocketSharp, arrowForwardCircleSharp });
  }

  ngOnInit() {
    // Add the eye icon to the Ionicons library
    addIcons({
      eyeSharp,
      rocketSharp,
    });
  }

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';

    // Removes non whitespaces and double @
    const filteredValue = (value as string)
      .replace('\\s+', '')
      .replace(/@+/g, '@');
    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
  @ViewChild('ionPasswordInputEl', { static: true })
  ionPasswordInputEl!: IonInput;
  onPasswordInput(event: CustomEvent) {
    const filteredValue = (event.target as HTMLIonInputElement).value ?? '';
    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionPasswordInputEl.value = this.passwordModel =
      filteredValue as string;
  }

  signUp() {
    createUserWithEmailAndPassword(
      this.auth,
      this.inputModel,
      this.passwordModel
    )
      .then((userCredential: UserCredential) => {
        // Signed in user
        // redirect to the home page
        this.router.navigate(['/home']);
        // sign in the user
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.log(errorMessage);
        // Handle error (e.g., show an alert)
        if (errorCode === 'auth/email-already-in-use') {
          this.onRegisterErrorAlert(true, RegistrationError.EmailAlreadyInUse);
        } else if (errorCode === 'auth/invalid-email') {
          this.onRegisterErrorAlert(true, RegistrationError.InvalidEmail);
        } else if (
          errorCode === 'auth/invalid-password' ||
          errorCode === 'auth/weak-password'
        ) {
          this.onRegisterErrorAlert(true, RegistrationError.InvalidPassword);
        } else if (errorCode === 'auth/internal-error') {
          this.onRegisterErrorAlert(true, RegistrationError.InternalError);
        } else {
          this.onRegisterErrorAlert(true, RegistrationError.Default);
        }
      });
  }
  @ViewChild('ionAlert', { static: false })
  ionAlert!: IonAlert;
  onRegisterErrorAlert(show: boolean, message?: string) {
    this.isRegistrationErrorAlertOpen = show;
    if (typeof message !== 'undefined') {
      this.ionAlert.message = message;
    }
  }
}

enum RegistrationError {
  EmailAlreadyInUse = 'The email address is already in use by another account.',
  InvalidPassword = 'The password is invalid, must be at least 6 characters long.',
  InvalidEmail = 'The email address provided is not valid.',
  InternalError = 'An internal error occurred. Please try again later.',
  Default = 'An error occurred. Please try again later.',
}
// Note: The above code is a simplified example and does not include error handling or form validation.
