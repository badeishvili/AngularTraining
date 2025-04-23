
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../Utilities/Services/logging.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingService.logComponent('D-Component');
  }
}
