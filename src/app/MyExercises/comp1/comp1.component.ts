import { Component } from "@angular/core";
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-comp1',
  standalone: true,
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  imports: [
    NgIf,
    NgForOf
  ]
})
  export class HelloComp {
    name = 'Angular';
    courses = [1,2,3,4,5];
}
