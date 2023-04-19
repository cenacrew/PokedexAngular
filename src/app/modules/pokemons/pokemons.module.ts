import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { SharedModule } from '@/shared/shared.module';
import { PokemonsListItemComponent } from './pokemons-list-item/pokemons-list-item.component';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonsListItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PokemonsListComponent,
    PokemonsListItemComponent,
  ]
})
export class PokemonsModule { }
