import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChordComponent } from './chord.component';

const routes: Routes = [
  {
    path: "chord/:chord",
    component: ChordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
