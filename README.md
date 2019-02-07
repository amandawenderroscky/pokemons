# Pokemons - PokeApi

App created to list and view the details of Pokémons, obtained by api PokeApi.

## Tools Used in Development

*  [Angular CLI](https://github.com/angular/angular-cli) - Angular Command Line Interface - version 7.30
* `Angular`- version 7.2.0
* `TypeScript` - version 3.2.2
* `NodeJs`- version 10.15.1
* `Bootstrap`- version 4.2.1 - as a basis of style
* `Protractor, Karma & Jasmine` - for tests
* [Poke Api](https://pokeapi.co/) - Modern RESTful API that returns all the Pokémon data you need.


## Architecture

This App was made with `Angular 7` using Typescript and was developed based on components, with specific functions. The Component style was created from CSS3 with SCSS.


* Components:

`AppComponent` - Responsible for creating the application and displaying the main page.

`Pagination` - Responsible for creating and displaying paging of the Pokemon list.

`NavbarComponent` - Component responsible for creating the application header with the navbar.



* Models:

`ListResult`- Class that represents the list of Pokemons obtained through the api.

`Pokemon` - Class that represents each Pokémon.


* Pages:

`Home` - Application main page.

`PokemonListComponent` - Displays the paged list with pokémons, obtained through the api.

`PokemonDetailComponent` - It receives as parameter some properties like the name or id and is responsible for displaying the details of the Pokemon.



# Development

### Getting Started

* Prerequisites:

This project have dependencies that require Node 10 or higher, together with NPM 6 or higher.

Prepare the development enviroment by running:

```
npm install -g @angular/cli
```

Install app dependencies by running inside app path:

```
npm i
```

## Development server

Serve app in development mode by running:

```
ng serve
```

Then open the address `http://localhost:4200/` in the browser. The app will automatically reload if you change any of the source files.


### Tests

You can run tests by running:

```
ng test
```

To execute the unit tests via [Karma](https://karma-runner.github.io).

* The following unit tests were implemented:

AppComponent
    should create the app

NavBarComponent
    should create
    should render the logo

PaginationComponent
    should create

HomeComponent
    should create

PokemonDetailComponent
    should create

PokemonListComponent
    should create

PokemonService
    should return a Pokemon
    should return an Observable<Pokemon>
    
    should return a Pokemon List
    should return a List of Pokemons


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## TODO
* Improve test coverage
* Implement E2E tests
* Implement all get methods of other Pokémon items.
* Improve handling of API errors.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
