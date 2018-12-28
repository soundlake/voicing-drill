import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Chord, Note } from 'tonal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  private readonly title = 'voicing-drill';
  private timerSubscription: Subscription;

  constructor(private readonly router: Router) {}

  public ngOnInit() {
    this.timerSubscription = interval(5000).subscribe(() => {
      this.router.navigate([`chord/${this.pickRandomKey()}${this.pickRandomChord()}`]);
    });
  }

  public ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  private pickRandomKey(): string {
    const noteNames = Note.names()
    const random_index = Math.floor(Math.random() * noteNames.length);
    return noteNames[random_index];
  }

  private pickRandomChord(): string {
    const chordNames = Chord.names();
    const random_index = Math.floor(Math.random() * chordNames.length);
    return chordNames[random_index];
  }
}
