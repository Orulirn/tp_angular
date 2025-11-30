import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApi } from '../poke-api';
import { PokemonSelection } from '../pokemon-selection'
 
@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  pokemon_id: string = '';
  selected_pokemon: number= 0;
  pipe_text: string = '';

  pokemonList: Pokemon[] = [];

  constructor(
    private pokeApi: PokeApi,
    private pokemonSelection: PokemonSelection
  ) {}

  ngOnInit(): void {
    this.pokeApi.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.pokemon_entries.map((entry: any) => ({
        id: entry.entry_number,
        nom: entry.pokemon_species.name
      }));
    });
  }

  onGo() {
    const pokemonId = Number(this.selected_pokemon);
    if (pokemonId > 0) {
      this.pokemonSelection.selectPokemon(pokemonId);  // Cette ligne manque !
    }
  }
}
