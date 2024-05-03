import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importar la clase Hero desde el archivo 'hero.ts'
import { HeroService } from '../hero.service'; // Importar el servicio HeroService desde el archivo 'hero.service.ts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Lista de Jugadores

  constructor(private heroService: HeroService) { } // Inyectar el servicio HeroService en el constructor

  ngOnInit(): void {
    this.getHeroes(); // Al inicializar el componente, obtener los Jugadores
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Obtener los Jugadores del servicio y asignarlos a la lista (solo los primeros 4 héroes)
  }
}