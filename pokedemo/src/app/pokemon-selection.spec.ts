import { TestBed } from '@angular/core/testing';

import { PokemonSelection } from './pokemon-selection';

describe('PokemonSelection', () => {
  let service: PokemonSelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
