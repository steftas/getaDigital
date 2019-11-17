import { NgModule } from '@angular/core';
import { MoviesModule } from './movies/movies.module';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'movies',
        loadChildren: './movies/movies.module#MoviesModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MoviesModule
    ]
})
export class ContentModule { }
