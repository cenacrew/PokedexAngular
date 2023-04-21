import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MoveService } from 'src/app/services/move.service';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss'],
})
export class PokemonMovesComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  errorMessage?: string;
  movesname: string[] = [];
  id: number = 0;
  moves: Move[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private moveService: MoveService // Add MoveService
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
          next: (movesname) => {
            this.movesname = movesname;
            this.id = +(this.route.snapshot.paramMap.get('id') || '0');
            this.movesname.forEach((name) => {
              this.moveService.getMoveByName(name).subscribe({
                next: (move) => {
                  this.moves.push(move);
                },
                error: (err) => {
                  this.errorMessage = err.message;
                },
              });
            });
          },
          error: (err) => {
            this.errorMessage = err.message;
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
