import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { SharedModule } from '@/shared/shared.module';


@NgModule({
  declarations: [
    PokemonsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PokemonsListComponent
  ]
})
export class PokemonsModule { }
