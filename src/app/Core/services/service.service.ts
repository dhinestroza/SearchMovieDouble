import { EnvironmentInjector, inject, Injectable, runInInjectionContext, signal } from '@angular/core';
import { Movie } from '../../Models/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from '@envs/environment';
import {toSignal} from '@angular/core/rxjs-interop'
import { tap } from 'rxjs';
import { ApiResponse, Movies } from 'app/Models/searchMovie';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public movies = signal<Movies[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endpoint = environment.apiUrl;
  private readonly _apiKey = environment.apiKey;
  private readonly _injector = inject(EnvironmentInjector);


  constructor() { }

  getMovieByName(name:String) {
    return runInInjectionContext(this._injector,()=>{
      
      return toSignal<ApiResponse>(this._http.get<ApiResponse>(`${this._endpoint}/?s=${name}&apikey=${this._apiKey}`)
      .pipe(
        tap(r=>{
          if(r.Response === 'True'){
            this.movies.set(r.Search);
          }else{
            console.error('No movies found or error:',r);
            this.movies.set([])
          }
        })
      ));
    })
  }

  getMovieById(id:String){
    return runInInjectionContext(this._injector,()=>{
      
      return toSignal<Movie>(this._http.get<Movie>(`${this._endpoint}/?i=${id}&apikey=${this._apiKey}`));
    })
  }
}
