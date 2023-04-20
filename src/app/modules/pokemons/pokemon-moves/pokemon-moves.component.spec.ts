import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMovesComponent } from './pokemon-moves.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMovesComponent;
  let fixture: ComponentFixture<PokemonMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
