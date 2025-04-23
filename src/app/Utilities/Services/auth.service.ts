import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  login(username: string, password: string): void {
    if (username && password) {
      this.token = '123';
    }
    else {this.token = null;}
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  logout(): void {
    this.token = null;
  }
}
