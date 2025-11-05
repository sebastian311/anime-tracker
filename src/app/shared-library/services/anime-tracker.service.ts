import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/app/environement';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Anime } from '../models/anime.interface';

/**
 * Anime Tracker Service
 *
 * Central service for all anime-related data operations.
 * Currently uses a fake backend interceptor for development.
 *
 * TODO: Once real backend is ready, update the following:
 * 1. API Endpoints to implement:
 *    - GET /api/anime-list - Get all anime (with pagination, filters)
 *    - GET /api/anime/:id - Get specific anime details
 *    - GET /api/anime/trending - Get trending anime
 *    - GET /api/anime/top-rated - Get top-rated anime
 *    - GET /api/anime/search?q=query - Search anime by title
 *    - GET /api/anime/:id/reviews - Get reviews for specific anime
 *    - POST /api/anime/:id/reviews - Submit a review (requires auth)
 *    - GET /api/genres - Get all available genres
 *    - GET /api/anime/by-genre/:genre - Get anime by genre
 *
 * 2. User-specific endpoints (requires authentication):
 *    - GET /api/user/favorites - Get user's favorite anime
 *    - POST /api/user/favorites/:animeId - Add to favorites
 *    - DELETE /api/user/favorites/:animeId - Remove from favorites
 *    - GET /api/user/watchlist - Get user's watchlist
 *    - POST /api/user/watchlist/:animeId - Add to watchlist
 *    - PUT /api/user/watchlist/:animeId - Update watch progress
 *
 * 3. Add caching strategy for better performance
 * 4. Add error handling and retry logic
 * 5. Add request/response interceptors for auth tokens
 */
@Injectable({
  providedIn: 'root'
})
export class AnimeTrackerService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch list of all anime
   * Currently intercepted by FakeBackendInterceptor to return mock data
   *
   * TODO: Once backend is ready:
   * - Add pagination parameters (page, limit)
   * - Add filter parameters (genre, rating, year)
   * - Add sort parameters (rating, popularity, title)
   * - Implement caching to reduce API calls
   *
   * @returns Observable<Anime[]> - Array of anime objects
   */
  getAnimeList(): Observable<Anime[]> {
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

  // TODO: Add more service methods as needed:
  // getAnimeById(id: number): Observable<Anime> { }
  // searchAnime(query: string): Observable<Anime[]> { }
  // getTrendingAnime(): Observable<Anime[]> { }
  // getTopRatedAnime(): Observable<Anime[]> { }
  // getAnimeReviews(id: number): Observable<Review[]> { }
  // submitReview(animeId: number, review: Review): Observable<any> { }
}
