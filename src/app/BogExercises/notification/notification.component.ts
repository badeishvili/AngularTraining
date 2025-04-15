import {AfterContentInit, Component, ContentChildren, ElementRef, QueryList} from '@angular/core';
import {DummyDirective} from './dummy.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [
    NgIf
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements AfterContentInit {
  @ContentChildren(DummyDirective)
  content!: QueryList<ElementRef>;
  hasContent = false;

  ngAfterContentInit() {
    this.hasContent = this.content.length > 0;

  }
}
