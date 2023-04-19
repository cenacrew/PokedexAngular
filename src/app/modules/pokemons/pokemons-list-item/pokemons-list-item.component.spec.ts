import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListItemComponent } from './pokemons-list-item.component';

describe('PokemonsListItemComponent', () => {
  let component: PokemonsListItemComponent;
  let fixture: ComponentFixture<PokemonsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
