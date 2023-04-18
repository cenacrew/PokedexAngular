import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {}

  getPokemon(){
    return [
      {
        id:1,
        name:'Bulbasaur',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }]
    }
      
}
