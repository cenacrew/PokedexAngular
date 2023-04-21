import { Pokemon } from '@/models/pokemon.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit,OnDestroy {
  subscription = new Subscription();
  errorMessage?: string;
  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute,private pokemonService : PokemonService){}
  ngOnInit():void {
    this.subscription.add(
      this.route.paramMap.pipe(
        switchMap((params) => this.pokemonService.getPokemonMovesById(+(params.get('id')||0)))
      ).subscribe({
        error: (err) => this.errorMessage = err.message
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
