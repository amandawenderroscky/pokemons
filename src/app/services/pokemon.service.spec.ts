
import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        LocalStorageModule.forRoot({
          prefix: 'pokemons',
          storageType: 'localStorage'
        })],
      providers: [PokemonService, { provide: XHRBackend, useClass: MockBackend }],

    });
  });

  describe('getPokemonByName()', () => {
    it('should return an Observable<Pokemon>',
      inject([PokemonService, XHRBackend], (service: PokemonService, mockBackend) => {

        const pokemonName = "caterpie";

        const mockResponse = {

          "abilities": [
            {
              "ability": {
                "name": "shield-dust",
                "url": "https://pokeapi.co/api/v2/ability/19/"
              },
              "is_hidden": false,
              "slot": 1
            }
          ],
          "base_experience": 39,
          "forms": [
            {
              "name": "caterpie",
              "url": "https://pokeapi.co/api/v2/pokemon-form/10/"
            }
          ],
          "game_indices": [
            {
              "game_index": 10,
              "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
              }
            }
          ],
          "height": 3,
          "held_items": [],
          "id": 10,
          "is_default": true,
          "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/10/encounters",
          "moves": [
            {
              "move": {
                "name": "tackle",
                "url": "https://pokeapi.co/api/v2/move/33/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            }
          ],
          "name": "caterpie",
          "order": 14,
          "species": {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon-species/10/"
          },
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
            "front_shiny_female": null
          },
          "stats": [
            {
              "base_stat": 45,
              "effort": 0,
              "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
              }
            },
            {
              "base_stat": 20,
              "effort": 0,
              "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
              }
            }
          ],
          "types": [
            {
              "slot": 1,
              "type": {
                "name": "bug",
                "url": "https://pokeapi.co/api/v2/type/7/"
              }
            }
          ],
          "weight": 29

        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getPokemonDetail(pokemonName).subscribe((pokemon: Pokemon) => {
          expect(pokemon).toBeDefined();
        });

        //fazer o teste para pegar todos os pokemons

      }));
  });


});
