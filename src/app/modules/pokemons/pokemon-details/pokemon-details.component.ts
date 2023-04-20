import { Pokemon } from '@/models/pokemon.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss','./pokemon-details.component.bis.scss']
})
export class PokemonDetailsComponent implements OnInit,OnDestroy {
  subscription = new Subscription();
  errorMessage?: string;
  pokemon?: Pokemon;



  constructor(private route: ActivatedRoute,private pokemonService : PokemonService){}
  ngOnInit():void {
    this.subscription.add(
      this.route.paramMap.pipe(
        switchMap((params) => this.pokemonService.getPokemonById(+(params.get('id')||0)))
      ).subscribe({
        next: (pokemon) => this.pokemon = pokemon,
        error: (err) => this.errorMessage = err.message
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getStatValue(statName: string): number {
    const stat = this.pokemon?.stats?.find(stat => stat.name === statName);
    return stat ? stat.value : 0;
  }
  
}
