  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Move } from '../models/move.model';

  @Injectable({
    providedIn: 'root'
  })
  export class MoveService {
    private readonly POKEAPI_URL = 'https://pokeapi.co/api/v2/move';

    constructor(private http: HttpClient) {}

    getMoveByName(name: string): Observable<Move> {
      return this.http.get(`${this.POKEAPI_URL}/${name}`).pipe(
        map((response: any) => {
            const id = response.id;
            const name = response.name;
            const accuracy = response.accuracy ? response.accuracy : 100;
            const effect_chance = response.effect_chance;
            const pp = response.pp;
            const power = response.power ? response.power : 0;
            const damage_class = response.damage_class.name;
            const effect_entries = response.effect_entries[0] ? response.effect_entries[0].short_effect.replace(/\$effect_chance/g, effect_chance) : "N/A";            const type = response.type.name;
            return { id, name, accuracy, effect_chance, pp, power, damage_class, effect_entries, type  } as Move;
        })
      );
    }

  }
