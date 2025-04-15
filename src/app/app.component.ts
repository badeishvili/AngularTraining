import { Component } from '@angular/core';
import { HelloComp } from "./MyExercises/comp1/comp1.component";
import {WSFirstFormComponent} from './BogExercises/wsfirst-form/wsfirst-form.component';
import {AppDirective} from './Utilities/Directives/mydirective.directive';
import {TruncatePipe} from './Utilities/Pipes/textcutpipe.pipe';
import {CustomTransformPipe} from './Utilities/Pipes/registerpipe.pipe';
import {
  LabelDictionaryComponent
} from './BogExercises/label-dictionary-pipe/label-dictionary.component';
import {CoursesComponent} from './MyExercises/courses/courses.component';
import {WsJobDescComponent} from './BogExercises/ws-job-desc/ws-job-desc.component';
import {NotificationComponent} from './BogExercises/notification/notification.component';
import {DummyDirective} from './BogExercises/notification/dummy.directive';
import {PanelComponent} from './MyExercises/panel/panel.component';
import {TweetlikeComponent} from './MyExercises/tweetlike/tweetlike.component';

@Component({
  selector: 'app-root',
  imports: [HelloComp, WSFirstFormComponent, AppDirective, TruncatePipe, CustomTransformPipe, LabelDictionaryComponent, CoursesComponent, WsJobDescComponent, NotificationComponent, DummyDirective, PanelComponent, TweetlikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  }
}
