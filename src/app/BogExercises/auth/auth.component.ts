import { Component } from '@angular/core';
import { AuthService } from '../../Utilities/Services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  statusMessage: string = 'User is not logged in';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password);
    this.updateStatus();
  }

  logout(): void {
    this.authService.logout();
    this.updateStatus();
  }

  updateStatus(): void {
    if (this.authService.isLoggedIn()) {
      this.statusMessage = '';
    } else {
      this.statusMessage = 'User is not logged in';
    }
  }
}
