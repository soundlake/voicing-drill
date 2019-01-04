import { Component, OnInit } from '@angular/core';
import { Note } from 'tonal';

@Component({
  selector: 'app-chords-table',
  templateUrl: './chords-table.component.html',
  styleUrls: ['./chords-table.component.scss']
})
export class ChordsTableComponent implements OnInit {
  public show: boolean;
  public readonly notes: string[] = Note.names();
  public readonly chords: string[] = [
    'M7', 'M9', 'M7(#11)',
    'm7', 'm9', 'm7(11)',
    'dim7', 'aug7',
    '7', '7sus4', '7(b9)', '7(b13)', '7(b9,b13)', '7(#11)', '7(b9,#11)',
    'alt',
  ];


  constructor() { }

  public ngOnInit() {
    this.show = false;
  }
}
