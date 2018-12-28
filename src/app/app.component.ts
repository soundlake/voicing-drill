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
  public button_label: 'start' | 'stop';
  public repeat_interval: number;
  private repeat_subscription: Subscription;

  constructor(private readonly router: Router) {}

  public ngOnInit() {
    this.button_label = 'start';
    this.repeat_interval = 5;
  }

  private start(new_interval: number) {
    this.stop();
    if (new_interval < 1) {
      new_interval = 1;
    }
    console.log(`Now it will repeat in ${new_interval} second(s).`);
    this.repeat_subscription = interval(new_interval * 1000).subscribe(() => {
      this.router.navigate([`chord/${this.pickRandomKey()}${this.pickRandomChord()}`]);
    });
  }

  private stop() {
    if (this.repeat_subscription && !this.repeat_subscription.closed) {
      this.repeat_subscription.unsubscribe();
    }
  }

  public ngOnDestroy() {
    this.stop();
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

  public onRepeatIntervalChanged(new_interval: number) {
    this.repeat_interval = new_interval;
    if (this.button_label === 'stop') {
      this.start(this.repeat_interval);
    }
  }

  public onButtonClicked() {
    if (this.button_label === 'start') {
      this.start(this.repeat_interval);
      this.button_label = 'stop';
    } else {
      this.stop();
      this.button_label = 'start';
    }
  }
}
