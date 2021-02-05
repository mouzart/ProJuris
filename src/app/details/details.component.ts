import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    public user: any = {};
    public repos: any = {};

    constructor(private route: ActivatedRoute, public config: ConfigService) {
    }

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('name'));
        this.config.http.get(this.config.url + 'api/users/' + this.route.snapshot.paramMap.get('name') + '/details')
            .subscribe((response: any) => {
                this.user = response.data;
            });
        this.config.http.get(this.config.url + 'api/users/' + this.route.snapshot.paramMap.get('name') + '/repos')
            .subscribe((response: any) => {
                this.repos = response.data;
            });

    }

}
