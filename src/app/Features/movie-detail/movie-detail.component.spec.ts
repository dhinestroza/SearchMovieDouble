import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'app/Core/services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from 'app/Models/movie';
import { signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let mockService:jasmine.SpyObj<ServiceService>
  

  const mockMovie: Movie = {
    Title: "Thor",
    Year: "2011",
    Rated: "PG-13",
    Released: "06 May 2011",
    Runtime: "115 min",
    Genre: "Action, Fantasy",
    Director: "Kenneth Branagh",
    Writer: "Ashley E. Miller, Zack Stentz, Don Payne",
    Actors: "Chris Hemsworth, Anthony Hopkins, Natalie Portman",
    Plot: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    Language: "English",
    Country: "United States",
    Awards: "5 wins & 30 nominations",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.0/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "77%"
      },
      {
        Source: "Metacritic",
        Value: "57/100"
      }
    ],
    Metascore: "57",
    imdbRating: "7.0",
    imdbVotes: "918,174",
    imdbID: "tt0800369",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$181,030,624",
    Production: "N/A",
    Website: "N/A",
    Response: "True"

  }



  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ServiceService',['getMovieById']);

    
    mockService.getMovieById.and.callFake(() => {
      const movieSignal = signal<Movie | undefined>(mockMovie);
      return movieSignal; 
    });

    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
