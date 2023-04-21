import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsListComponent } from '@/modules/pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from '@/modules/pokemons/pokemon-details/pokemon-details.component';
import { PokemonMovesComponent } from '@/modules/pokemons/pokemon-moves/pokemon-moves.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'pokemons/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons/:id/moves', component: PokemonMovesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }