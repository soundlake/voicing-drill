import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <h1>{{ chord$|async }}</h1>
  `
})
export class ChordComponent {
    public chord$ = this.route.params.pipe(
      map(params => params.chord)
    );

  constructor(private readonly route: ActivatedRoute) {}
}
