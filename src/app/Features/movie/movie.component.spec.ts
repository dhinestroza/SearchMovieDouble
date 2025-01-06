import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { HttpClientModule } from '@angular/common/http';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[],
      imports: [HttpClientModule]
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
