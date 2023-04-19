import { Pokemon } from '@/models';
import { Component,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pokemons-list-item',
  templateUrl: './pokemons-list-item.component.html',
  styleUrls: ['./pokemons-list-item.component.scss']
})
export class PokemonsListItemComponent {

    @Input() pokemon!: Pokemon;
    @Output() pokemonClicked = new EventEmitter<string>();
    handleClick(): void {
      this.pokemonClicked.emit(this.pokemon?.name);
    }
}
