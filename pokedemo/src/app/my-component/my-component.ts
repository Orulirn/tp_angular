import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
 
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

  pokemonList: Pokemon[] = [
    { id: 1, nom: 'Pikachu' },
    { id: 2, nom: 'Bulbizarre' },
    { id: 3, nom: 'Salamèche' },
    { id: 4, nom: 'Carapuce' },
    { id: 5, nom: 'Roucool' }
  ];

  onGo() {
    const pokemonId = Number(this.selected_pokemon);
    const selectedPokemon = this.pokemonList.find(p => p.id === pokemonId);
  
    if (selectedPokemon) {
      console.log('Pokémon sélectionné - ID:', selectedPokemon.id);
      console.log('Pokémon sélectionné - Nom:', selectedPokemon.nom);
    } else {
      console.log('Aucun pokémon sélectionné');
    }
  }
}
