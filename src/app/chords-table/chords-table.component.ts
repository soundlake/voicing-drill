import { Component, OnInit } from '@angular/core';

import { ChordsListService, Chord, Note } from '../chords-list.service';

@Component({
  selector: 'app-chords-table',
  templateUrl: './chords-table.component.html',
  styleUrls: ['./chords-table.component.scss']
})
export class ChordsTableComponent implements OnInit {
  public show: boolean;

  constructor(private readonly chordsList: ChordsListService) {}

  public ngOnInit() {
    this.show = false;
  }

  public toggle(note: Note | null, chord: Chord | null) {
    this.chordsList.toggle(note, chord);
  }
}
