import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { SharedModule } from '@/shared/shared.module';
import { PokemonsListItemComponent } from './pokemons-list-item/pokemons-list-item.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonsListItemComponent,
    PokemonDetailsComponent,
    PokemonMovesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    PokemonsListComponent,
    PokemonsListItemComponent,
    RouterModule
  ]
})
export class PokemonsModule { }
