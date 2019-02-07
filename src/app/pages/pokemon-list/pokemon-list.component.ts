import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ListResult } from 'src/app/models/list-result.model';
import { Page } from 'src/app/components/pagination/page.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  lista: ListResult;
  search: string;
  page: Page;
  sub: Subscription;
  loading: boolean;

  constructor(private _pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.page = new Page();
    this.page.limit = 10;
    this.page.offset = 0;
    this.page.actualPage = 1;

    this.sub = this.route.params.subscribe(params => {
      this.search = params['search'];
    });

    this.paginateList();
  }

  listPokemons() {
    this._pokemonService.getAllPokemons(this.search, this.page.offset, this.page.actualPage, this.page.limit).subscribe(res => {
      this.lista = new ListResult();

      this.lista.total = res.count;
      this.page.total = this.lista.total;
      this.lista.next = res.next;
      this.lista.previous = res.previous;

      this._pokemonService.getPokemonsDetails(res.results).subscribe((pokemons: Pokemon[]) => {
        this.lista.pokemonsList = pokemons;
        this.loading = false;
      });

    });
  }

  paginateList() {
    this.listPokemons();
  }

  favoritePokemon(pokemon: Pokemon, isFavorite: boolean) {
    this._pokemonService.setFavorite(pokemon, isFavorite);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
