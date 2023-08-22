import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Program } from 'src/app/interfaces/programs';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-program-results',
  templateUrl: './program-results.component.html',
  styleUrls: ['./program-results.component.scss']
})
export class ProgramResultsComponent implements OnInit, OnChanges {
  @Input() query!: string;

  programItems?: Program[];

  constructor(
    private programService: ProgramsService
  ) { }

  ngOnInit(): void {
    this.getPrograms();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPrograms();
  }

  getPrograms(): void {
    this.programService.getPrograms(this.query).subscribe((result) => {
      this.programItems = result.results;
    });
  }
}
