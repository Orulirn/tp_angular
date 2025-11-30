import { Component, OnInit } from '@angular/core';
import { PokeApi } from '../poke-api';
import { Pokemon } from '../pokemon';
import { PokemonSelection } from '../pokemon-selection';

@Component({
  selector: 'app-pokemon-details',
  standalone: false,
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css'
})
export class PokemonDetails implements OnInit {

  pokemon: Pokemon | null = null;

  constructor(
    private pokeApi: PokeApi,
    private pokemonSelection: PokemonSelection
  ) { }

  ngOnInit(): void {
    this.pokemonSelection.selectedId$.subscribe((id: number | null) => {
          console.log('pokemon-details reçoit id =', id);  // Ajouter cette ligne
      if (id !== null) {
        this.loadPokemon(id);
      }
    });
  }

  loadPokemon(idOrName: number | string): void {
    this.pokeApi.getPokemonDetails(idOrName).subscribe((response: any) => {
      this.pokemon = {
        id: response.id,
        nom: response.name,
        image: response.sprites.front_default,
        height: response.height,
        weight: response.weight,
        types: response.types.map((t: any) => t.type.name),
        stats: response.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat
        }))
      };
    });
  }
}