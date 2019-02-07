import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HomeComponent } from '../home/home.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { Page } from 'src/app/components/pagination/page.model';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  let componentPagination: PaginationComponent;
  let fixturePagination: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, PokemonListComponent, HomeComponent, PaginationComponent],
      imports: [
        HttpClientModule,
        Angular2FontawesomeModule,
        LocalStorageModule.forRoot({
          prefix: 'pokemons',
          storageType: 'localStorage'
        }),
        AppRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixturePagination = TestBed.createComponent(PaginationComponent);
    componentPagination = fixturePagination.componentInstance;
    componentPagination.page = new Page();
    fixturePagination.detectChanges();
  });

  it('should create',
    inject([ActivatedRoute, PokemonService, Router], (route: ActivatedRoute, _pokemonService: PokemonService, router: Router) => {
      expect(component).toBeTruthy();
    })
  );
});
