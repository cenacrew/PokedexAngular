import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListComponent } from './pokemons-list.component';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the pokemon id, sprite and name', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[data-testid="id"]')?.textContent).toBe('1');
    expect(el.querySelector('[data-testid="sprite"]')?.getAttribute('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    expect(el.querySelector('[data-testid="name"]')?.textContent).toBe('Bulbasaur');
  });
});
