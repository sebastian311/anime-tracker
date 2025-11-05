import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeTrackerService } from '../../shared-library/services/anime-tracker.service';
import { Anime } from '../../shared-library/models/anime.interface';

/**
 * Anime Reviews Component
 * Displays user reviews and ratings for a specific anime
 *
 * TODO: This component uses mock data. Once backend API is ready:
 * 1. Create a reviews service to fetch real reviews from the backend
 * 2. Implement review submission functionality with authentication
 * 3. Add review voting/helpful feature
 * 4. Add pagination for reviews
 * 5. Add review filtering and sorting options
 */

interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: Date;
  review: string;
  helpful: number;
}

@Component({
  selector: 'app-anime-reviews',
  templateUrl: './anime-reviews.component.html',
  styleUrls: ['./anime-reviews.component.scss']
})
export class AnimeReviewsComponent implements OnInit {
  anime: Anime | undefined;
  animeId!: number;
  reviews: Review[] = [];
  loading: boolean = true;
  averageRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeTrackerService
  ) {}

  ngOnInit(): void {
    // Get anime ID from route parameter
    this.route.params.subscribe(params => {
      this.animeId = +params['id'];
      this.loadAnimeAndReviews();
    });
  }

  loadAnimeAndReviews(): void {
    this.loading = true;

    // Fetch anime details
    this.animeService.getAnimeList().subscribe({
      next: (animeList) => {
        this.anime = animeList.find(a => a.id === this.animeId);

        // Load mock reviews (TODO: Replace with real API call)
        this.loadMockReviews();

        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading anime reviews:', error);
        this.loading = false;
      }
    });
  }

  // TODO: Replace this with real API call to backend when ready
  loadMockReviews(): void {
    // Mock reviews data
    this.reviews = [
      {
        id: 1,
        userName: 'AnimeExpert99',
        userAvatar: 'assets/default-avatar.png',
        rating: 9,
        date: new Date('2024-01-15'),
        review: 'This is an absolutely amazing anime! The story is captivating, the characters are well-developed, and the animation quality is top-notch. Highly recommended for anyone who loves this genre.',
        helpful: 42
      },
      {
        id: 2,
        userName: 'OtakuMaster',
        userAvatar: 'assets/default-avatar.png',
        rating: 8,
        date: new Date('2024-02-20'),
        review: 'Great anime overall. The plot twists kept me on the edge of my seat. Some pacing issues in the middle, but the ending was worth it.',
        helpful: 28
      },
      {
        id: 3,
        userName: 'AnimeFan2024',
        userAvatar: 'assets/default-avatar.png',
        rating: 10,
        date: new Date('2024-03-10'),
        review: 'Masterpiece! This anime deserves all the praise it gets. The emotional depth and storytelling are phenomenal.',
        helpful: 56
      }
    ];

    // Calculate average rating
    if (this.reviews.length > 0) {
      this.averageRating = this.reviews.reduce((sum, review) => sum + review.rating, 0) / this.reviews.length;
    }
  }

  // TODO: Implement with authentication and backend API
  submitReview(): void {
    console.log('Submit review clicked - Requires authentication and backend API');
    // Once implemented:
    // 1. Check if user is authenticated
    // 2. Show review form modal/component
    // 3. Submit review to backend
    // 4. Refresh reviews list
  }

  // TODO: Implement helpful vote functionality with backend
  markHelpful(reviewId: number): void {
    console.log(`Mark review ${reviewId} as helpful - Backend API needed`);
    // Once implemented, send vote to backend and update UI
  }

  getRatingStars(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    if (hasHalfStar) {
      stars.push('half');
    }
    while (stars.length < 10) {
      stars.push('empty');
    }

    return stars;
  }
}
