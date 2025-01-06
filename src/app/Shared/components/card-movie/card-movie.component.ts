import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movies } from 'app/Models/searchMovie';

@Component({
  selector: 'app-card-movie',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  movie = input.required<Movies>();
}
