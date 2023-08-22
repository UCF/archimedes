import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EventResult } from 'src/app/interfaces/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.scss']
})
export class EventResultsComponent implements OnInit, OnChanges {
  @Input() query!: string;

  events?: EventResult[]

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents(this.query).subscribe((results) => {
      this.events = results.results;
    });
  }
}
