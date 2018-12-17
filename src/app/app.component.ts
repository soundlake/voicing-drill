import { Component } from '@angular/core';
import { Chord } from "tonal";
import * as Dictionary from "tonal-dictionary";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voicing-drill';
  chordNames = Chord.names();
}
