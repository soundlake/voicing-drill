import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

import { ChordsListService } from './chords-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public is_playing: boolean = false;
  public repeat_interval: number = 5;
  private repeat_subscription: Subscription;

  constructor(
    private readonly router: Router,
    public readonly chordsList: ChordsListService,
  ) {}

  private start(new_interval: number) {
    this.stop();
    console.log(`Now it will repeat in ${new_interval} second(s).`);
    this.repeat_subscription = interval(new_interval * 1000).subscribe(() => {
      this.router.navigate([`chord/${this.pickRandomChord()}`]);
    });
    this.is_playing = true;
  }

  private stop() {
    if (this.repeat_subscription && !this.repeat_subscription.closed) {
      this.repeat_subscription.unsubscribe();
    }
    this.is_playing = false;
  }

  public ngOnDestroy() {
    this.stop();
  }

  private pickRandomChord(): string {
    const num_chords = this.chordsList.actives.length;
    if (num_chords < 1) {
      this.stop();
      return 'Please select some chords.';
    }
    const random_index = Math.floor(Math.random() * num_chords);
    return this.chordsList.actives[random_index];
  }

  public onRepeatIntervalChanged(new_interval: number) {
    if (new_interval < 1) {
      new_interval = 1;
    }
    this.repeat_interval = new_interval;
  }

  public onButtonClicked() {
    if (this.is_playing) {
      this.stop();
    } else {
      this.start(this.repeat_interval);
    }
  }
}
