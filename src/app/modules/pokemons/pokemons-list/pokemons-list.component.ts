import { Component } from '@angular/core';

import { Pokemon } from '@/models';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent {
  pokemons: Pokemon[]

  constructor(private pokemonService: PokemonService) { 
    this.pokemons = this.pokemonService.getPokemon();
  }

  handlePokemonClicked(name: string): void {
    console.log('pokemon clicked :', name);
  }
}

