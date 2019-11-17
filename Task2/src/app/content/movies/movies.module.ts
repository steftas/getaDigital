import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MoviesService } from './movies.service';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
    {
        path     : 'movies',
        component: MoviesComponent
    },
    {
        path     : 'movie/:id',
        component: MovieComponent,
        resolve  : {
            movie: MovieService
        }
    },
    {
        path: '**',
        redirectTo: 'movies'
    }
];

@NgModule({
    declarations: [
        MoviesComponent,
        MovieComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatGridListModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule
    ],
    exports: [
        MoviesComponent
    ],
    providers: [
        MoviesService,
        MovieService
    ]
})
export class MoviesModule { }
