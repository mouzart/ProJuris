export interface IPokemon {
    id?: any;
    name?: string;
    base_experience?: string;
    height?: number;
    is_default?: boolean;
    order?: number;
    weight?: number;
    url?: string;
    location_area_encounters?: string;
    abilities?: any[];
    forms?: any[];
    game_indices?: any[];
    moves?: any[];
    sprites?: IPokemonSpripte;
    species?: any[];
    stats?: any[];
    types?: any[];
}

export interface IPokemonSpripte {
    front_default?: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
}
