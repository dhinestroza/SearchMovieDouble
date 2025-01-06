import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { ServiceService } from './service.service';
import { ApiResponse, Movies } from 'app/Models/searchMovie';
import { environment } from '@envs/environment';
import { HttpStatusCode } from '@angular/common/http';
import { Movie } from 'app/Models/movie';

describe('APIService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[]
    });

    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify()
  })
});
