import { Component } from '@angular/core';
import { HelloComp } from "./comp1/comp1.component";
import {WSFirstFormComponent} from './wsfirst-form/wsfirst-form.component';
import {AppDirective} from './mydirective.directive';
import {TruncatePipe} from './textcutpipe.pipe';
import {CustomTransformPipe} from './registerpipe.pipe';
import {
  LabelDictionaryComponent
} from './LabelDictionaryPipe/label-dictionary-pipe/label-dictionary.component';

@Component({
  selector: 'app-root',
  imports: [HelloComp, WSFirstFormComponent, AppDirective, TruncatePipe, CustomTransformPipe, LabelDictionaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
}
