import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly POKE_LIMIT = '?limit=1008';

  constructor(private http: HttpClient) {}



  getPokemon(): Observable<Pokemon[]> {
    return this.http.get(`${this.POKEAPI_URL}${this.POKE_LIMIT}`).pipe(
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
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return { id, name, generation, sprite } as Pokemon;
      })
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
    } else if (id <= 905){
      return 8;
    } else {
      return 9;
    }
  }
}