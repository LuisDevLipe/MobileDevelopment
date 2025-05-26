import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
} from '@ionic/angular/standalone';
import { eyeSharp, rocketSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Auth, createUserWithEmailAndPassword, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class RegisterPage implements OnInit {
  public email: string = '';
  public inputModel: string = '';
  public passwordModel: string = '';
  public password: string = '';

  constructor(private auth: Auth, private router: Router) {}

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
