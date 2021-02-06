import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {IPokemon, IPokemonSpripte} from '../../models/pokemon.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public pokemonList: IPokemon[] = [];
    public pokemonFavoriteList: IPokemon[] = [];
    public pokemon: IPokemon = {};
    public previous: string;
    public next: string;
    public count = 0;

    constructor(public config: ConfigService) {
    }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(url?: string): void {
        this.config.http.get(url ? url : this.config.url + 'pokemon/').subscribe((response: any) => {
            this.pokemonList = response.results;
            this.pokemonDetails(response.results[0].url);
            this.previous = response.previous;
            this.next = response.next;
            this.count = response.count;
        });
        this.pokemonFavoriteList = this.getStoragePokemonFavoriteList();
    }

    pokemonDetails(url: string): void {
        this.config.http.get(url).subscribe((response: IPokemon) => {
            this.pokemon = response;
        });
    }

    savePokemon(pokemon: IPokemon): void {
        this.pokemonFavoriteList = this.getStoragePokemonFavoriteList();
        if (this.checkIfPokemonFavorite(pokemon)) {
            this.pokemonFavoriteList.push(pokemon);
        }
        localStorage.setItem('pokemonFavoriteList', JSON.stringify(this.pokemonFavoriteList));
    }

    checkIfPokemonFavorite(pokemon: IPokemon): boolean {
        return this.pokemonFavoriteList.findIndex(p => p.name === pokemon.name) < 0 ? true : false;
    }

    getStoragePokemonFavoriteList(): IPokemon[] {
        return localStorage.getItem('pokemonFavoriteList') ? JSON.parse(localStorage.getItem('pokemonFavoriteList')) : [];
    }

    cleanStoragePokemonFavorite(): void {
        localStorage.setItem('pokemonFavoriteList', '');
        this.pokemonFavoriteList = [];
    }

}
