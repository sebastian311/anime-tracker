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
  isLogged: boolean = false;

  #animeService = inject(AnimeTrackerService);

  ngOnInit(): void {
    this.#animeService.getAnimeList().subscribe(
      data => {
        console.log('Anime list received:', data);
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
