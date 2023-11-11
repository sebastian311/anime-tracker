import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, throttleTime, map, startWith, Observable, filter, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

import { Anime } from '../../models/anime.interface';
import { AnimeTrackerService } from '../../services/anime-tracker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit{
  @ViewChild('navbarWrapper') navbarWrapper!: ElementRef<HTMLElement>;
  @ViewChild('autocompleteTrigger') autocompleteTrigger: MatAutocompleteTrigger | undefined;

  #animeService = inject(AnimeTrackerService);

  searchActive: boolean = false;
  menuActive = false;
  isLogged = false;
  animeCtrl = new FormControl('');
  filteredAnimes!: Observable<Anime[]>;
  animes: Anime[] = []

  ngOnInit(): void {
      this.#animeService.getAnimeList().subscribe(
        data => {
          this.animes = data;
        },
        error => {
          console.error("Data fetch failed: " + error);
        }
      )
  }

  ngAfterViewInit() {
    fromEvent(window, 'scroll').pipe(
      throttleTime(10), // limit the frequency of the scroll event
      map(() => window.scrollY)
    ).subscribe(scrollY => {
      const maxOpacity = 0.9;
      const opacity = Math.min(scrollY / 100, maxOpacity); 
      this.navbarWrapper.nativeElement.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
    
    this.filteredAnimes = this.animeCtrl.valueChanges.pipe(
      filter(term => term !== ''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(anime => {
        // If the term is not empty, filter the animes
        if (anime) {
          return of(this._filteranimes(anime));
        } else {
          // If the term is empty (e.g., on focus), return the full list or an empty list
          return of(this.animes.slice());
        }
      })
    );
  }

  private _filteranimes(value: string): Anime[] {
    const filterValue = value.toLowerCase();

    return this.animes.filter(animes => animes.title.toLowerCase().includes(filterValue));
  }

  onBlurClose() {
    this.searchActive = false
    if (this.autocompleteTrigger) this.autocompleteTrigger.closePanel();
  }

  toggleSearch() {
    this.closeMenu();
    this.searchActive = !this.searchActive;
  }
  
  openMenu() {
    this.menuActive = true;
    this.searchActive = false
  }

  closeMenu() {
    this.menuActive = false;
  }
}
