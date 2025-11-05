import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { AnimeTrackerService } from 'src/app/shared-library/services/anime-tracker.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit{
  @Input() menuActive: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();

  #animeService = inject(AnimeTrackerService);

  // TODO: Replace with actual authentication state from AuthService
  isLogged: boolean = false;
  imageUrl: string | undefined;
  topAnimeId: number | undefined;
  topAnimeTitle: string = '';


  ngOnInit(): void {
    // Fetch anime list and display top-ranked anime in the featured panel
    this.#animeService.getAnimeList().subscribe(
      data => {
        // TODO: When favorites feature is implemented:
        // 1. Check if user is logged in
        // 2. If logged in, fetch user's favorite anime
        // 3. Pick a random anime from favorites
        // 4. If no favorites, fall back to top-ranked anime
        const anime = data.find(anime => anime.ranking == 1)
        this.imageUrl = anime?.heroImage;
        this.topAnimeId = anime?.id;
        this.topAnimeTitle = anime?.title || '';
      },
      error => {
        console.error('Error fetching anime list:', error);
      }
    );
  }

  onCloseMenu() {
    this.closeMenu.emit();
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;

    if (!this.menuActive) this.onCloseMenu();
  }
}
