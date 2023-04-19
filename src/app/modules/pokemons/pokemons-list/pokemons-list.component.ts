import { Component } from '@angular/core';

import { Pokemon } from '@/models';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent {
  pokemons: Pokemon[] = [];
  errorMessage?: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe({next:(pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    }, error: (err) => {
      this.errorMessage = err.message
    }});
  }


  handlePokemonClicked(name: string): void {
    console.log('pokemon clicked :', name);
  }
}

