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

  isLogged: boolean = false;
  imageUrl: string | undefined;


  ngOnInit(): void {
    this.#animeService.getAnimeList().subscribe(
      data => {
        const anime = data.find(anime => anime.ranking == 1)
        this.imageUrl = anime?.heroImage;
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
