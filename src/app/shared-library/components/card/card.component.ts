import { Component, Input } from '@angular/core';
import { Anime } from '../../models/anime.interface';

/**
 * Reusable card component for displaying anime information
 * Can be used in various contexts like search results, detail pages, recommendations, etc.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() anime!: Anime;
  @Input() showDescription: boolean = false;
  @Input() cardSize: 'small' | 'medium' | 'large' = 'medium';
}
