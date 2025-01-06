import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieComponent } from './card-movie.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Movies } from 'app/Models/searchMovie';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { input } from '@angular/core';
import { SIGNAL, signalSetFn } from '@angular/core/primitives/signals';


describe('CardMovieComponent', () => {
  let component: CardMovieComponent;
  let fixture: ComponentFixture<CardMovieComponent>;

  const mockMovie: Movies = {
    Title: "Thor",
    Year: "2011",
    imdbID: "tt0800369",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg"
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMovieComponent,RouterModule.forRoot([]),CommonModule,RouterLink],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMovieComponent);
    component = fixture.componentInstance;
    signalSetFn(component.movie[SIGNAL],mockMovie)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.movie().Poster
  });


  it('should display movie title and type', () => {
    fixture.detectChanges();
  
    const titleElement = fixture.debugElement.query(By.css('h1.text-2xl')).nativeElement;
    const typeElement = fixture.debugElement.query(By.css('h1.title-font.text-lg')).nativeElement;

    expect(titleElement.textContent).toContain(mockMovie.Title);
    expect(typeElement.textContent).toContain(mockMovie.Type);
  });

  it('should display movie poster image', () => {
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toBe(mockMovie.Poster);
  });

  it('should render the component correctly', () => {
    fixture.detectChanges();
    const cardContainer = fixture.debugElement.query(By.css('.h-full')).nativeElement;
    expect(cardContainer).toBeTruthy();
  });

  it('should have correct routerLink for the movie', () => {
    fixture.detectChanges();
    const linkElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(linkElement.getAttribute('href')).toBe(`/movies/${mockMovie.imdbID}`);
  });


});
