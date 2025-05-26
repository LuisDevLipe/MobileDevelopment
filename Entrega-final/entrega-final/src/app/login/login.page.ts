import { Component, OnInit, ViewChild } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInSharp } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class LoginPage implements OnInit {
  public emailModel: string = '';
  public passwordModel: string = '';

  constructor(private auth: Auth, private router: Router) {
    addIcons({ logInSharp });
  }

  ngOnInit() {
    // Add the logIn icon to the Ionicons library
    addIcons({
      logInSharp,
    });
  }

  onSignIn() {
    signInWithEmailAndPassword(this.auth, this.emailModel, this.passwordModel)
      .then((userCredential) => {
        // Signed in
        const user: User = userCredential.user;
        console.log('User signed in:', user);
        // Navigate to the home page or any other page
        // this.router.navigate(['/home']);
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
