import { Component } from '@angular/core';
import { HelloComp } from "./comp1/comp1.component";
import {WSFirstFormComponent} from './wsfirst-form/wsfirst-form.component';
import {AppDirective} from './mydirective.directive';
import {TruncatePipe} from './textcutpipe.pipe';
import {CustomTransformPipe} from './registerpipe.pipe';
import {
  LabelDictionaryComponent
} from './label-dictionary-pipe/label-dictionary.component';
import {CoursesComponent} from './courses/courses.component';
import {WsJobDescComponent} from './ws-job-desc/ws-job-desc.component';
import {NotificationComponent} from './notification/notification.component';
import {DummyDirective} from './notification/dummy.directive';

@Component({
  selector: 'app-root',
  imports: [HelloComp, WSFirstFormComponent, AppDirective, TruncatePipe, CustomTransformPipe, LabelDictionaryComponent, CoursesComponent, WsJobDescComponent, NotificationComponent, DummyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
}
