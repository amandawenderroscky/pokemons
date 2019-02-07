import { Pokemon } from './pokemon.model';

export class ListResult {
    pokemonsList: Pokemon[];
    total: number;
    next: string;
    previous: string;

}