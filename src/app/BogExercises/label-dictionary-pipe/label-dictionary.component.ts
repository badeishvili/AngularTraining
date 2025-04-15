import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LabelDictionaryPipePipe } from './label-dictonary.pipe';
import {NgIf} from '@angular/common';
import {dictionary} from './dictionary';


@Component({
  selector: 'app-label-dictionary',
  imports: [

  ],
  templateUrl: './label-dictionary.component.html',
  styleUrl: './label-dictionary.component.css'
})
export class LabelDictionaryComponent {
  text = 'Label Dictionary';
  list = dictionary

  findElementByKey(key: string): string {
    return this.list.get(key) || 'Key not found';
  }
}
