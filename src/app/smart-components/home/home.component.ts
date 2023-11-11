import { Component, OnInit, inject } from '@angular/core';
import { mockedData2 } from 'src/app/shared-library/mock/mocked-data';
import { AnimeTrackerService } from 'src/app/shared-library/services/anime-tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  #animeService = inject(AnimeTrackerService);
  mockedData: any = [];
  mockedData2: any = mockedData2;

  ngOnInit(): void {
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
