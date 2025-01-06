import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'app/Core/services/service.service';
import { CardMovieComponent } from 'app/Shared/components/card-movie/card-movie.component';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule,CardMovieComponent,ReactiveFormsModule,HttpClientModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  public movieSvc = inject(ServiceService);
  movies = this.movieSvc.movies;
  searchMovie = new FormControl('');

getMovies() {
  const movie = this.searchMovie.value;
  if(movie?.trim()){
    console.log(this.movieSvc.getMovieByName(movie));   
  }
}

}
