import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { JobDescForm } from './JDform';

@Component({
  selector: 'app-job-desc',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './ws-job-desc.component.html',
  styleUrl: './ws-job-desc.component.css'
})
export class WsJobDescComponent {
  jdform: FormGroup<JobDescForm> = new FormGroup<JobDescForm>(<JobDescForm>{
    firstName: new FormControl<string>('Initial username Value', {nonNullable: true}),
    lastName: new FormControl<string>('Initial lastname Value', {nonNullable: true}),
    age: new FormControl<number>(0, {nonNullable: true}),
    country: new FormControl<string>('Initial Country Value', {nonNullable: true}),
  }) ;
}
