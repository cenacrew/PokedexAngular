import { Pokemon } from '@/models';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-pokemons-list-item',
  templateUrl: './pokemons-list-item.component.html',
  styleUrls: ['./pokemons-list-item.component.scss']
})
export class PokemonsListItemComponent {

    @Input() pokemon!: Pokemon;
}
