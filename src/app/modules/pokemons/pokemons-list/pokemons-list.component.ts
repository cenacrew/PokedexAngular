import { Component } from '@angular/core';

import { Pokemon } from '../../../models/pokemon.model';
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
}

/**
 *  id:1,
    name:'Bulbasaur',
    generation:1,
    sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'{
  id:2,
  name:'Ivysaur',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
}
,{
  id:3,
  name:'Venusaur',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
}
,{
  id:4,
  name:'Charmander',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
}
,{
  id:5,
  name:'Charmeleon',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
}
,{
  id:6,
  name:'Charizard',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
}
,{
  id:7,
  name:'Squirtle',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
}
,{
  id:8,
  name:'Wartortle',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
}
,{
  id:9,
  name:'Blastoise',
  generation:1,
  sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
}*/