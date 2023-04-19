import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsListComponent } from '@/modules/pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from '@/modules/pokemons/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'pokemons/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }