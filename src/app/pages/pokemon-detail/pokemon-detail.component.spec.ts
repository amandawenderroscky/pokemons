import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PokemonService } from 'src/app/services/pokemon.service';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, PokemonListComponent],
      imports: [
        Angular2FontawesomeModule,
        AppRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject([ActivatedRoute, PokemonService, Router], (route: ActivatedRoute, _pokemonService: PokemonService, router: Router) => {
      expect(component).toBeTruthy();
    })
  );
});
