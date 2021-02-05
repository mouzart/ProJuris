import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {isDevMode} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    public url = '/';

    constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
        this.url = 'https://pokeapi.co/api/v2/';
    }

}
