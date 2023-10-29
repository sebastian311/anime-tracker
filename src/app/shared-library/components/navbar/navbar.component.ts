import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, throttleTime, map, startWith, Observable } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

import { Anime } from '../../models/anime.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('navbarWrapper') navbarWrapper!: ElementRef<HTMLElement>;
  @ViewChild('autocompleteTrigger') autocompleteTrigger: MatAutocompleteTrigger | undefined;

  searchActive: boolean = false;
  menuActive = false;
  isLogged = false;

  animeCtrl = new FormControl('');
  filteredAnimes!: Observable<Anime[]>;

  animes: Anime[] = [
    {
      id: 1,
      title: 'Naruto',
      description: 'Lorem Ipsum Leaf Villigium',
      image: '../../../assets/naruto.png',
      rating: 4.5,
      ranking: 1,
      votes: 200,
    },
    {
      id: 2,
      title: 'One Piece',
      description: 'Lorem Ipsum Pirate Adventures',
      image: '../../../assets/onepiece.png',
      rating: 4.7,
      ranking: 2,
      votes: 190,
    },
    {
      id: 3,
      title: 'Bleach',
      description: 'Lorem Ipsum Soul Society',
      image: '../../../assets/myhero.png',
      rating: 4.3,
      ranking: 3,
      votes: 180,
    },
    {
      id: 4,
      title: 'Death Note',
      description: 'Lorem Ipsum Shinigami',
      image: '../../../assets/fairytail.png',
      rating: 4.8,
      ranking: 4,
      votes: 170,
    },
    {
      id: 5,
      title: 'Attack on Titan',
      description: 'Lorem Ipsum Titans',
      image: '../../../assets/overlord.png',
      rating: 4.9,
      ranking: 5,
      votes: 160,
    },
  ];

  constructor() {
    this.filteredAnimes = this.animeCtrl.valueChanges.pipe(
      startWith(''),
      map(anime => (anime ? this._filteranimes(anime) : this.animes.slice())),
    );
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
    this.searchActive = !this.searchActive;
  }
  
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
