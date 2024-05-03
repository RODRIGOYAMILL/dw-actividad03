import {Component, OnInit} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common'; //Importamos Ngif UpperCasePipe
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

//Agregamos a componentes Ngif y UpperCasePipe
//Agregamos en la clase HeroDetailCmponent @Input hero?
@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})

/*
export class HeroDetailComponent {
  @Input() hero?: Hero;
}*/

export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined; // Héroe actual

  constructor(
    private route: ActivatedRoute, // Ruta activada actualmente
    private heroService: HeroService, // Servicio HeroService
    private location: Location // Ubicación actual del navegador
  ) {}

  ngOnInit(): void {
    this.getHero(); // Obtener el héroe al inicializar el componente
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID del héroe de la ruta activada
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero); // Obtener el héroe del servicio y asignarlo a la propiedad 'hero'
  }

  goBack(): void {
    this.location.back(); // Volver atrás en la navegación del usuario
  }
}