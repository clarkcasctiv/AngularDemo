import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule { }
