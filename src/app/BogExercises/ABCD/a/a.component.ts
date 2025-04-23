
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../Utilities/Services/logging.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  providers: [LoggingService]
})
export class AComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingService.logComponent('A-Component');
  }
}
