import { Routes } from '@angular/router';
import { MovieComponent } from './Features/movie/movie.component';

export const routes: Routes = [
    {
        path:'movies',
        loadChildren:()=>import('./Features/movies.routes')

    },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    {path:'**',redirectTo:'movies',pathMatch:'full'}
];
