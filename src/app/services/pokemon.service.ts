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
      },
      {
        id:2,
        name:'Ivysaur',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      },
      {
        id:3,
        name:'Venusaur',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
      },
      {
        id:4,
        name:'Charmander',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      },{
        id:5,
        name:'Charmeleon',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
      }
      ,{
        id:6,
        name:'Charizard',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
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
      }
      ,{
        id:10,
        name:'Caterpie',
        generation:1,
        sprite:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
      },{
        id: 11,
        name: 'Metapod',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
      },
      {
        id: 12,
        name: 'Butterfree',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
      },
      {
        id: 13,
        name: 'Weedle',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png'
      },
      {
        id: 14,
        name: 'Kakuna',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png'
      },
      {
        id: 15,
        name: 'Beedrill',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
      },
      {
        id: 16,
        name: 'Pidgey',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png'
      },
      {
        id: 17,
        name: 'Pidgeotto',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'
      },
      {
        id: 18,
        name: 'Pidgeot',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png'
      },
      {
        id: 19,
        name: 'Rattata',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
      },
      {
        id: 20,
        name: 'Raticate',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png'
      },
      {
        id: 21,
        name: 'Spearow',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png'
      },
      {
        id: 22,
        name: 'Fearow',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png'
      },
      {
        id: 23,
        name: 'Ekans',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png'
      },
      {
        id: 24,
        name: 'Arbok',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png'
      },
      {
        id: 25,
        name: 'Pikachu',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      {
        id: 26,
        name: 'Raichu',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
      },
      {
        id: 27,
        name: 'Sandshrew',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png'
      },
      {
        id: 28,
        name: 'Sandslash',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png'
      },
      {
        id: 29,
        name: 'Nidoran♀',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png'
      },
      {
        id: 30,
        name: 'Nidorina',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png'
      },
      {
        id: 31,
        name: 'Nidoqueen',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png'
      },
      {
        id: 32,
        name: 'Nidoran♂',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png'
      },
      {
        id: 33,
        name: 'Nidorino',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png'
      },
      {
        id: 34,
        name: 'Nidoking',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png'
      },
      {
        id: 35,
        name: 'Clefairy',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png'
      },
      {
        id: 36,
        name: 'Clefable',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png'
      },
      {
        id: 37,
        name: 'Vulpix',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png'
      },
      {
        id: 38,
        name: 'Ninetales',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png'
      },
      {
        id: 39,
        name: 'Jigglypuff',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png'
      },
      {
        id: 40,
        name: 'Wigglytuff',
        generation: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png'
      }





      

    ]
    }
      
}
