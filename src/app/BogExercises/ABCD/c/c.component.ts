
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../../Utilities/Services/logging.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingService.logComponent('C-Component');
  }
}
