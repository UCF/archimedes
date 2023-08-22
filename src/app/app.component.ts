import { Component } from '@angular/core';
import { EventResultsComponent } from './components/event-results/event-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'archimedes';
  currentQuery!: string;

  queryChange(event: any) {
    this.currentQuery = event.target.value;
  }
}
