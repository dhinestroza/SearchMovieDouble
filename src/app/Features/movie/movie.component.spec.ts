import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { CardMovieComponent } from 'app/Shared/components/card-movie/card-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'app/Core/services/service.service';
import { CommonModule } from '@angular/common';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[MovieComponent,CardMovieComponent],
      imports: [CommonModule,ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
