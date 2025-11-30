import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApi {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokedex/1`);
  }

  getPokemonDetails(idOrName: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${idOrName}`);
  }
}