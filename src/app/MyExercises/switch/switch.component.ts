import { Component } from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-switch',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  viewMode = 'map';

}
