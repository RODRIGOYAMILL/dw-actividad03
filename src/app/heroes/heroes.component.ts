import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //Importamos el mock HEROES 
import { HeroService } from '../hero.service';//
import { MessageService } from '../message.service';//


//Agregamos una propieda hero llamado Windstorm
//Eliminamos hero id y name de la clase HeroesComponent
//Agregamos COnstructor

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
export class HeroesComponent implements OnInit {
    
    heroes = HEROES;
    selectedHero: Hero | undefined;
  
    constructor() { }
  
    ngOnInit() {
    }
    
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
  */

  export class HeroesComponent implements OnInit {

    selectedHero?: Hero; // Héroe seleccionado
  
    heroes: Hero[] = []; // Lista de héroes
  
    constructor(private heroService: HeroService, private messageService: MessageService) { }
  
    ngOnInit(): void {
      this.getHeroes(); // Obtener la lista de héroes al inicializar el componente
    }
  
    onSelect(hero: Hero): void {
      this.selectedHero = hero; // Asignar el héroe seleccionado
      this.messageService.add(`Componente Héroes: Héroe seleccionado con Id=${hero.id}`); // Agregar mensaje al servicio de mensajes
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes); // Obtener la lista de héroes desde el servicio
    }
  
  }