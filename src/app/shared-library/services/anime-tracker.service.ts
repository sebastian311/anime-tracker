import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/app/environement';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeTrackerService {
  #http = Inject(HttpClient);

  getAnimeList() {
      return this.#http.get(environment.apiUrl).pipe(
        tap({
          next: (data) => {
            console.log('Data received:', data);
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        })
      );
  }
}
