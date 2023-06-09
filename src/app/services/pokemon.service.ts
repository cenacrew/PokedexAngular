import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly POKE_LIMIT = 1008;

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get(`${this.POKEAPI_URL}?limit=${this.POKE_LIMIT}`).pipe(
      map((response: any) => {
        return response.results.map((pokemon: any) => {
          const id = this.getIdFromUrl(pokemon.url);
          const name = pokemon.name;
          const generation = this.getGeneration(id);
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return { id, name, generation, sprite } as Pokemon;
        });
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get(`${this.POKEAPI_URL}/${id}`).pipe(
      map((response: any) => {
        const id = response.id;
        const name = response.name;
        const generation = this.getGeneration(id);
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        const types = response.types.map((type: any) => type.type.name);
        const stats = response.stats.map((stat: any) => {
          return { name: stat.stat.name, value: stat.base_stat };
        });
        const height = response.height * 10;
        const weight = response.weight / 10;
        const nbMoves = response.moves.length;
        const abilities = response.abilities.map(
          (ability: any) => ability.ability.name
        );
        let next: number;
        let prev : number;
        if (id < this.POKE_LIMIT) {
          next = id + 1;
        } else {
          next = this.POKE_LIMIT;
        }
        if (id > 1) {
          prev = id - 1;
        } else {
          prev = 1;
        }
        const idPrev = prev;
        const idNext = next;

        const nextSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idNext}.png`;
        const prevSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPrev}.png`;

        return {
          id,
          name,
          generation,
          sprite,
          types,
          stats,
          height,
          weight,
          abilities,
          nbMoves,
          idPrev,
          idNext,
          nextSprite,
          prevSprite,
        } as Pokemon;
      })
    );
  }

  getPokemonMovesById(id: number): Observable<string[]> {
    const url = `${this.POKEAPI_URL}/${id}`;
    return this.http.get(url).pipe(
      map((pokemon: any) => {
        const moves = pokemon.moves.map((move: any) => move.move.name);
        return moves;
      })
    );
  }

  getFirstTypeById(id: number): Observable<string> {
    const url = `${this.POKEAPI_URL}/${id}`;
    return this.http.get(url).pipe(
      map((pokemon: any) => pokemon.types[0].type.name)
    );
  }

  private getIdFromUrl(url: string): number {
    return +url.split('/').slice(-2, -1);
  }

  private getGeneration(id: number): number {
    if (id <= 151) {
      return 1;
    } else if (id <= 251) {
      return 2;
    } else if (id <= 386) {
      return 3;
    } else if (id <= 493) {
      return 4;
    } else if (id <= 649) {
      return 5;
    } else if (id <= 721) {
      return 6;
    } else if (id <= 809) {
      return 7;
    } else if (id <= 905) {
      return 8;
    } else if (id <=1008) {
      return 9;
    } else {
      return 42;
    }
  }
}
