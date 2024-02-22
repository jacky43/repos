import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import {
  /* . . . */
  NgFor, NgIf, UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';



@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        NgFor,
        UpperCasePipe,
        HeroDetailComponent
    ]
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}