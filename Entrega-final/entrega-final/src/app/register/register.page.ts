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
  IonMenuButton,
  IonItem,
  IonList,
  IonBackButton,
} from '@ionic/angular/standalone';
import { eyeSharp, rocketSharp, arrowForwardCircleSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {
  Auth,
  createUserWithEmailAndPassword,
  User,
  authState,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
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
    IonMenuButton,
    RouterLink,
    RouterLinkActive,
  ],
})
export class RegisterPage implements OnInit {
  public email: string = '';
  public inputModel: string = '';
  public passwordModel: string = '';
  public password: string = '';

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
      .then((userCredential) => {
        // Signed in user
        // redirect to the home page
        console.log(userCredential.user);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }
}
// Note: The above code is a simplified example and does not include error handling or form validation.
