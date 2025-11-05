import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeTrackerService } from '../../shared-library/services/anime-tracker.service';
import { Anime } from '../../shared-library/models/anime.interface';

/**
 * Anime Detail Component
 * Displays comprehensive information about a specific anime
 */
@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime | undefined;
  animeId!: number;
  relatedAnime: Anime[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeTrackerService
  ) {}

  ngOnInit(): void {
    // Get anime ID from route parameter
    this.route.params.subscribe(params => {
      this.animeId = +params['id'];
      this.loadAnimeDetails();
    });
  }

  loadAnimeDetails(): void {
    this.loading = true;

    // Fetch anime list and find the specific anime
    this.animeService.getAnimeList().subscribe({
      next: (animeList) => {
        this.anime = animeList.find(a => a.id === this.animeId);

        // Get related anime (excluding current one)
        this.relatedAnime = animeList
          .filter(a => a.id !== this.animeId)
          .slice(0, 4);

        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading anime details:', error);
        this.loading = false;
      }
    });
  }

  // TODO: Implement add to favorites functionality
  // This requires backend API and authentication service
  addToFavorites(): void {
    console.log('Add to favorites clicked - Backend API needed');
    // Once backend is ready, call service to add anime to user's favorites
  }

  // TODO: Implement watch functionality
  // This requires video streaming integration
  watchAnime(): void {
    console.log('Watch clicked - Video streaming integration needed');
    // Once streaming service is integrated, navigate to watch page
  }
}
