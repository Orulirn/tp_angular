import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSelection {

  private selectedIdSubject = new BehaviorSubject<number | null>(null);

  selectedId$: Observable<number | null> = this.selectedIdSubject.asObservable();

  constructor() { }

  selectPokemon(id: number): void {
    this.selectedIdSubject.next(id);
  }
}