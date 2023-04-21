import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  errorMessage?: string;
  moves: string[] = [];
  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap
        .pipe(
          switchMap((params) =>
            this.pokemonService.getPokemonMovesById(
              +(params.get('id') || '0') // cast to number
            )
          )
          
        )
        
        .subscribe({
          next: (moves) => {
            this.moves = moves;
            this.id = +(this.route.snapshot.paramMap.get('id') || '0');
          },
          error: (err) => {
            this.errorMessage = err.message;
          }
        })
    );
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}