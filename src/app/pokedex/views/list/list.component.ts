import { Component, OnInit } from '@angular/core';

import { PokeApiService } from 'pokedata';

@Component({
  selector: 'pk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filter = '';
  selectedPokemeon = null;

  get pokemonList() {
    return this.pokeApi.pokeList.filter(pokemon => {
      return (
        pokemon.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
      );
    });
  }

  get pokemonSprite() {
    const number = ('000' + this.selectedPokemeon.number).slice(-3);
    return `//serebii.net/xy/pokemon/${number}.png`;
  }

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.pokeApi.listAll();
  }

  selectPokemon(pokemon) {
    this.selectedPokemeon = pokemon;
  }
}
