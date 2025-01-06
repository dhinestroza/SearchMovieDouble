import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import jasmine from 'jasmine';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'app/Core/services/service.service';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent]
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
