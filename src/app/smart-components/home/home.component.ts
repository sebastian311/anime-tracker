import { Component, OnInit, inject } from '@angular/core';
import { mockedData2 } from 'src/app/shared-library/mock/mocked-data';
import { AnimeTrackerService } from 'src/app/shared-library/services/anime-tracker.service';

/**
 * Home Component
 *
 * Main page of the application displaying anime collections in carousels.
 * Features:
 * - Navbar with search functionality
 * - Hero image section
 * - "Top Hits Anime" carousel
 * - "HOT now" carousel with different anime ordering
 *
 * TODO Future Enhancements:
 * - Add pagination or infinite scroll for large datasets
 * - Add filtering options (genre, year, rating)
 * - Add sorting options (popularity, rating, newest)
 * - Implement personalized recommendations (requires user authentication)
 * - Add skeleton loaders while data is fetching
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  #animeService = inject(AnimeTrackerService);

  // Data for "Top Hits Anime" carousel
  mockedData: any = [];

  // Data for "HOT now" carousel - using different ordering
  // TODO: Once backend is ready, replace with real API endpoint for trending anime
  mockedData2: any = mockedData2;

  ngOnInit(): void {
    // Fetch anime list on component initialization
    this.#animeService.getAnimeList().subscribe(
      data => {
        this.mockedData = data;
      },
      error => {
        console.error('Error fetching anime list:', error);
      }
    );
  }
}
