import { Injectable } from '@angular/core';

export type Note =
         'C' | 'C#' |
  'Db' | 'D' | 'D#' |
  'Eb' | 'E' |
         'F' | 'F#' |
  'Gb' | 'G' | 'G#' |
  'Ab' | 'A' | 'A#' |
  'Bb' | 'B';

export type Chord =
  'M7' | 'M9' | 'M7(#11)' |
  'm7' | 'm9' | 'm7(11)' |
  'dim7' | 'aug7' |
  '7' | '7sus4' | '7(b9)' | '7(b13)' | '7(b9,b13)' | '7(#11)' | '7(b9,#11)' |
  'alt';

@Injectable({
  providedIn: 'root'
})
export class ChordsListService {
  private readonly all: { [key: string]: boolean; } = {};

  constructor() {
    this.notes.forEach(n => {
      this.chords.forEach(c => {
        this.all[this.key(n, c)] = true;
      });
    });
  }

  get notes(): Note[] {
    return [
            'C', 'C#',
      'Db', 'D', 'D#',
      'Eb', 'E',
            'F', 'F#',
      'Gb', 'G', 'G#',
      'Ab', 'A', 'A#',
      'Bb', 'B',
    ];
  }

  get chords(): Chord[] {
    return [
      'M7', 'M9', 'M7(#11)',
      'm7', 'm9', 'm7(11)',
      'dim7', 'aug7',
      '7', '7sus4', '7(b9)', '7(b13)', '7(b9,b13)', '7(#11)', '7(b9,#11)',
      'alt',
    ];
  }

  get actives(): string[] {
    return Object.keys(this.all).filter(k => this.all[k]);
  }

  private key(note: Note, chord: Chord) {
    return note.concat(chord);
  }

  private set(note: Note, chord: Chord, new_value: boolean) {
    this.all[this.key(note, chord)] = new_value;
  }

  public isActive(note: Note | null, chord: Chord | null) {
    if (note === null && chord === null) {
      return Object.values(this.all).every(v => v);
    }
    if (chord === null) {
      return this.chords.every(c => this.isActive(note, c));
    }
    if (note === null) {
      return this.notes.every(n => this.isActive(n, chord));
    }
    return this.all[this.key(note, chord)];
  }

  public toggle(note: Note | null, chord: Chord | null) {
    const new_value = !this.isActive(note, chord);
    if (note === null && chord === null) {
      this.notes.forEach(n => {
        this.chords.forEach(c => {
          this.set(n, c, new_value);
        });
      });
    } else if (chord === null) {
      this.chords.forEach(c => { this.set(note, c, new_value); });
    } else if (note === null) {
      this.notes.forEach(n => { this.set(n, chord, new_value); });
    } else {
      this.set(note, chord, new_value);
    }
    return new_value;
  }
}
