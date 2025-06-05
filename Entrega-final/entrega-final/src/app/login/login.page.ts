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
        console.log('User signed in:', user);
        // Navigate to the home page or any other page
        this.router.navigate(['/home']).then(() => {
          // Optionally, you can also reset the navigation stack
          this.location.replaceState('/home');
        });
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
