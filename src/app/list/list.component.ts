import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../shared/config.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public pokemonList: any[] = [];


    constructor(public config: ConfigService) {
    }

    ngOnInit(): void {
        this.config.http.get(this.config.url + 'pokemon/').subscribe((response: any) => {
            this.pokemonList = response.results;
        });
    }

}
