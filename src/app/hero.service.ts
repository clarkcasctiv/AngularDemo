import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
