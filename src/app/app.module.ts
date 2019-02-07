import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { LocalStorageModule } from 'angular-2-local-storage';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    NavbarComponent,
    PaginationComponent,
    PokemonDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2FontawesomeModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'pokemons',
      storageType: 'localStorage'
    })
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
