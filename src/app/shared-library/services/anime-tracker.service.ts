import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/app/environement';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Anime } from '../models/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeTrackerService {
  constructor(private http: HttpClient) {}

  getAnimeList() {
      return this.http.get<Anime[]>(environment.apiUrl + `/api/anime-list`).pipe(
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
