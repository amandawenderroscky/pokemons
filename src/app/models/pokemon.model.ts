export class Pokemon {

    id: number;
    name: string;
    weight: number;
    height: number;
    imgs: {};

    favorite: boolean = false;

    abilities: [];
    baseExperience: number;
    forms: [];
    game_indices: [];
    held_items: [];
    location_area_encounters: string;
    moves: [];
    species: {};
    stats: {};
    types: {};

    constructor(pokemonData: any) {
        this.id = pokemonData.id;
        this.imgs = pokemonData.sprites;
        this.favorite = pokemonData.favorite;
        
        Object.assign(this, ...pokemonData);

    }
}