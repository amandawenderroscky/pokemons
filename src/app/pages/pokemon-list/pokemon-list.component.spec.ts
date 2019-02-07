import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PokemonDetailComponent, HomeComponent, PaginationComponent],
      imports: [
        HttpClientModule,
        Angular2FontawesomeModule,
        AppRoutingModule,
        LocalStorageModule.forRoot({
          prefix: 'pokemons',
          storageType: 'localStorage'
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
