import {Component} from '@angular/core';
import {HelloComp} from "./MyExercises/comp1/comp1.component";
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
import {SwitchComponent} from './MyExercises/switch/switch.component';

import {AComponent} from './BogExercises/ABCD/a/a.component';
import {BComponent} from './BogExercises/ABCD/b/b.component';
import {CComponent} from './BogExercises/ABCD/c/c.component';
import {DComponent} from './BogExercises/ABCD/d/d.component';
import {LoggingService} from './Utilities/Services/logging.service';
import {AuthComponent} from './BogExercises/auth/auth.component';
import {ContactformComponent} from './MyExercises/contactform/contactform.component';
import {TaskFormComponent} from './BogExercises/ToDoList/taskform/taskform.component';
import {TaskListComponent} from './BogExercises/ToDoList/tasklist/tasklist.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloComp, WSFirstFormComponent, AppDirective, TruncatePipe, CustomTransformPipe, LabelDictionaryComponent, CoursesComponent, WsJobDescComponent, NotificationComponent, DummyDirective, PanelComponent, TweetlikeComponent, SwitchComponent, AComponent, BComponent, CComponent, DComponent, AuthComponent, ContactformComponent, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoggingService]
})

export class AppComponent {
  title = 'training';

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  }

  taskFormTitle = '';

  onTitleChange(value:string){
    this.taskFormTitle = value;
  }
}
