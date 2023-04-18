import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';



@NgModule({
  declarations: [
    PokemonsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonsListComponent
  ]
})
export class PokemonsModule { }
