import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  id: number;
  sub: Subscription;
  pokemon: Pokemon;
  search: string;
  loading: boolean;

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService, private router: Router) { }


  ngOnInit() {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.search = params['search']; 
      const param = this.id ? this.id : this.search;

      this._pokemonService.getPokemonDetail(param).subscribe(pokemon => {
        this.pokemon = pokemon;
        this.loading = false;
      }, error => {
        this.loading = false;
        alert(error.message);
      });
    });
  }

  goToPokemonsList() {
    this.router.navigate(['/pokemons']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
