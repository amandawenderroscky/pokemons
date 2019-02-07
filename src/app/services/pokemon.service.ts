import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	baseUrl: string = "https://pokeapi.co/api/v2";

	constructor(private _http: HttpClient, private _localStorageService: LocalStorageService) { }

	getPokemons() {
		return this._http.get(this.baseUrl + '/pokemon');
	}

	getPokemonDetail(pokemon) {
		return this._http.get(this.baseUrl + '/pokemon/' + pokemon).pipe(map(res => {
			return this.transformToModel(res);
		}));
	}

	getAllPokemons(search: string = null, offset: number = 1, page: number = 1, limit: number = 10) {
		let httpParams: any = {};

		if (search) httpParams.search = search;
		if (offset) httpParams.offset = String(offset);
		if (offset) httpParams.page = String(page);
		if (limit) httpParams.limit = String(limit);


		return this._http.get(this.baseUrl + '/pokemon', { params: httpParams })
			.pipe(map((data: any) => {
				return data;
			}));
	}

	getPokemonsDetails(data: any) {
		return forkJoin(data.map(result => {
			return this.getPokemonDetail(result.name);
		}));
	}

	transformToModel(data: any) {
		if (this._localStorageService.get(String(data.id))) {
			data.favorite = true;
		}
		return new Pokemon(data);
	}

	setFavorite(pokemon: Pokemon, isFavorite: boolean) {
		if (isFavorite) {
			this._localStorageService.set(String(pokemon.id), true);
		} else {
			this._localStorageService.remove(String(pokemon.id));
		}

		pokemon.favorite = isFavorite;
	}
}