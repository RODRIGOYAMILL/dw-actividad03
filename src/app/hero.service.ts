import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';//

import { Hero } from './hero';//
import { HEROES } from './mock-heroes';//
import { MessageService } from './message.service';//


//GETHEROES
//GETHERO
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('El servicio de Jugadores: obteniendo Jugadores.');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Jugadores: Jugador Buscando id=${id}`);
    return of(hero);
  }
}


