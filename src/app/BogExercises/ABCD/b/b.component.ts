
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../Utilities/Services/logging.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingService.logComponent('B-Component');
  }
}
