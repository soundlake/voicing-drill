import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChordComponent } from './chord.component';
import { ChordsTableComponent } from './chords-table/chords-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordComponent,
    ChordsTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
