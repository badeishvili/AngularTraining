
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private container: { [key: string]: string } = {};

  logComponent(componentName: string): void {
    this.container[componentName] = `Initialized`;
    console.log(`${componentName} container:`, this.container);
  }

  getContainer(): { [key: string]: string } {
    return this.container;
  }
}
