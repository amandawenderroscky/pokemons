import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';

import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PokemonListComponent } from 'src/app/pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from 'src/app/pages/pokemon-detail/pokemon-detail.component';

describe('NavBarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, HomeComponent, PokemonListComponent, PokemonDetailComponent],
      imports: [
        FormsModule,
        Angular2FontawesomeModule,
        AppRoutingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject([Router], (router: Router) => {
      expect(component).toBeTruthy();
    })
  );

  it('should render the logo', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logo').src).toContain('assets/pokemon-logo.png');
  }));

});

