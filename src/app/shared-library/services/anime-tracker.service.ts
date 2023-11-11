import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/app/environement';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeTrackerService {
  constructor(private http: HttpClient) {}

  getAnimeList() {
      return this.http.get(environment.apiUrl + `/api/anime-list`).pipe(
        tap({
          next: (data) => {
            return data;
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        })
      );
  }
}
