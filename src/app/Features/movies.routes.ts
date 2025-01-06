import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('./movie/movie.component').then(c=>c.MovieComponent)},
    {path:':id',loadComponent:()=>import('./movie-detail/movie-detail.component').then(c=>c.MovieDetailComponent)}
    
];

export default routes;