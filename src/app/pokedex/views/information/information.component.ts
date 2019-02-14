import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { takeWhile } from 'rxjs/operators';

import { PokeApiService } from 'pokedata';

@Component({
  selector: 'pk-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  pokemonNumber: number;
  pokemon: any = {};

  private isAlive = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApi: PokeApiService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params: Params) => {
        this.pokemonNumber = parseInt(params['number'], 10);
        this.getPokemon();
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  private getPokemon() {
    this.pokeApi
      .getPokemon(this.pokemonNumber)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(response => (this.pokemon = response));
  }
}
