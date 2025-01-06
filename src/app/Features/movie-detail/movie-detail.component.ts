import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { ServiceService } from 'app/Core/services/service.service';
import { Movie } from 'app/Models/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  moviesId = input<String>('o',{alias:'id'})
  movie!: Signal<Movie|undefined>;
  private readonly moviesSvc = inject(ServiceService);

  ngOnInit(): void {
    this.movie = this.moviesSvc.getMovieById(this.moviesId());
  }
}
