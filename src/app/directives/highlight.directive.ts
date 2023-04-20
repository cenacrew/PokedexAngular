import { Directive, ElementRef, HostListener } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private pokemonService : PokemonService) { }

  @HostListener('mouseenter') onMouseEnter() {
    const id = this.el.nativeElement.id;
    this.pokemonService.getFirstTypeById(id).subscribe((type: string) => {
      this.highlight(type, true);
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('',false);
  }

  private highlight(type: string,on : boolean) {
    let color = '';
    if(on){
    switch (type){
      case 'normal':
        color = '#a8a878';
        break;
      case 'fighting':
        color = '#c03028';
        break;
      case 'flying':
        color = '#a890f0';
        break;
      case 'poison':
        color = '#a040a0';
        break;
      case 'ground':
        color = '#e0c068';
        break;
      case 'rock':
        color = '#b8a038';
        break;
      case 'bug':
        color = '#a8b820';
        break;
      case 'ghost':
        color = '#705898';
        break;
      case 'steel':
        color = '#b8b8d0';
        break;
      case 'fire':
        color = '#f08030';
        break;
      case 'water':
        color = '#6890f0';
        break;
      case 'grass':
        color = '#78c850';
        break;
      case 'electric':
        color = '#f8d030';
        break;
      case 'psychic':
        color = '#f85888';
        break;
      case 'ice':
        color = '#98d8d8';
        break;
      case 'dragon':
        color = '#7038f8';
        break;
      case 'dark':
        color = '#705848';
        break;
      case 'fairy':
        color = '#ee99ac';
        break;
      default: 
        color = '#ffffe1';
        break; 
    }
  }
    this.el.nativeElement.style.backgroundColor = color;
  }
}
