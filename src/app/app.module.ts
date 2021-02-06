import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ListComponent
            }
        ]),
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
