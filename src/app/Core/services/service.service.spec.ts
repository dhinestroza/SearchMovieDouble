import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { ServiceService } from './service.service';
import { ApiResponse } from 'app/Models/searchMovie';
import { Movie } from 'app/Models/movie';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ServiceService]
    });

    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes HTTP pendientes
  });

  it('should return data on successful reques',()=>{
    const mockDatos : ApiResponse = {
      Search: [
    {
      Title: "Thor",
      Year: "2011",
      imdbID: "tt0800369",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Ragnarok",
      Year: "2017",
      imdbID: "tt3501632",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
    },
    {
      Title: "Thor: The Dark World",
      Year: "2013",
      imdbID: "tt1981115",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Love and Thunder",
      Year: "2022",
      imdbID: "tt10648342",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Team Thor",
      Year: "2016",
      imdbID: "tt6016776",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Tales of Asgard",
      Year: "2011",
      imdbID: "tt1667903",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg"
    },
    {
      Title: "Team Thor: Part 2",
      Year: "2017",
      imdbID: "tt6599818",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
    },
    {
      Title: "Valhalla: The Legend of Thor",
      Year: "2019",
      imdbID: "tt8956872",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzI1YmQ1YzEtNDM0NS00OWZiLTgyMTYtNGZmNmNmODAyNmJhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Almighty Thor",
      Year: "2011",
      imdbID: "tt1792794",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Finding Korg",
      Year: "2018",
      imdbID: "tt8513006",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg"
    }
  ],
  totalResults: "96",
  Response: "True"
    };
    service.getMovieByName('Thor');
    const req = httpMock.expectOne('https://www.omdbapi.com/?s=Thor&apikey=c3455d56');
    expect(req.request.method).toBe('GET');
    req.flush(mockDatos);
    expect(service.movies().length).toBeGreaterThan(0);
    expect(service.movies()[0].Title).toBe('Thor');
  });

  it('should handle errors when making the request', () => {
    const errorMsg = 'Error de solcitud'
    service.getMovieByName('uknow');
    const req = httpMock.expectOne('https://www.omdbapi.com/?s=uknow&apikey=c3455d56');
    expect(req.request.method).toBe('GET');

    req.flush(null,{status:400,statusText:'Bad Request'});

    expect(service.movies().length).toBe(0)

  });

  it('should start with the empty movie list', () => {
    expect(service.movies().length).toBe(0);
  });

  it('should update the list of movies with the data received', () => {
    const mockDatos : ApiResponse = {
      Search: [
    {
      Title: "Thor",
      Year: "2011",
      imdbID: "tt0800369",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Ragnarok",
      Year: "2017",
      imdbID: "tt3501632",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
    },
    {
      Title: "Thor: The Dark World",
      Year: "2013",
      imdbID: "tt1981115",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Love and Thunder",
      Year: "2022",
      imdbID: "tt10648342",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Team Thor",
      Year: "2016",
      imdbID: "tt6016776",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Tales of Asgard",
      Year: "2011",
      imdbID: "tt1667903",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg"
    },
    {
      Title: "Team Thor: Part 2",
      Year: "2017",
      imdbID: "tt6599818",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
    },
    {
      Title: "Valhalla: The Legend of Thor",
      Year: "2019",
      imdbID: "tt8956872",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzI1YmQ1YzEtNDM0NS00OWZiLTgyMTYtNGZmNmNmODAyNmJhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Almighty Thor",
      Year: "2011",
      imdbID: "tt1792794",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"
    },
    {
      Title: "Thor: Finding Korg",
      Year: "2018",
      imdbID: "tt8513006",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg"
    }
  ],
  totalResults: "96",
  Response: "True"
    };
    service.getMovieByName('Thor');
    
    const req = httpMock.expectOne('https://www.omdbapi.com/?s=Thor&apikey=c3455d56');
    expect(req.request.method).toBe('GET');
    req.flush(mockDatos);
    expect(service.movies().length).toBeGreaterThan(0);
    expect(service.movies()[0].Title).toBe('Thor');
  });


  it('should get the movie by id correctly', () => {
    const mockMovie:Movie={
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

    service.getMovieById(mockMovie.imdbID);
    const req = httpMock.expectOne(`https://www.omdbapi.com/?i=${mockMovie.imdbID}&apikey=c3455d56`);
    expect(req.request.method).toBe('GET')

    req.flush(mockMovie);

    expect(service.movies().length).toBe(0);
    expect(mockMovie.Title).toBe('Thor');
    expect(mockMovie.imdbID).toBe('tt0800369');

  });


  it('should handle a network error when getting a movie by id (HTTP 500)', () => {
    const movieId = 'tt0800369';
    service.getMovieById(movieId);
    const req = httpMock.expectOne(`https://www.omdbapi.com/?i=${movieId}&apikey=c3455d56`);
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 500, statusText: 'Internal Server Error' });
    expect(service.movies().length).toBe(0);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
