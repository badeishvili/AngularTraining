import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {RegForm} from './RegForm';

@Component({
  selector: 'app-wsfirst-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './wsfirst-form.component.html',
  styleUrl: './wsfirst-form.component.css'
})
export class WSFirstFormComponent {
  myform: FormGroup<RegForm> = new FormGroup<RegForm>({
    username: new FormControl<string>('Initial username Value',{nonNullable:true}),
    lastname: new FormControl<string>('Initial lastname Value',{nonNullable:true}),
    email: new FormControl<string>('Initial email Value',{nonNullable:true}),
    password: new FormControl<string>('Initial password Value',{nonNullable:true}),
    confirmpassword: new FormControl<string>('Initial confirmpassword Value',{nonNullable:true}),
  }) ;
}
