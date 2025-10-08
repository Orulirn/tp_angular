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
  selected_pokemon: number = 0;

  pokemonList: Pokemon[] = [
    { id: 1, nom: 'Pikachu' },
    { id: 2, nom: 'Bulbizarre' },
    { id: 3, nom: 'Salamèche' },
    { id: 4, nom: 'Carapuce' },
    { id: 5, nom: 'Roucool' }
  ];
}
