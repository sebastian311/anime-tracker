import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { DeviceDetectorService } from 'ngx-device-detector';

/**
 * Carousel Component
 *
 * Displays anime items in a horizontal scrollable carousel with action dropdowns.
 * Supports both mobile and desktop layouts with responsive design.
 *
 * Features:
 * - Horizontal scrolling for multiple anime items
 * - Dropdown menu per item with actions (About, Reviews, Watch)
 * - Device detection for responsive layouts
 * - Integration with routing for navigation
 *
 * TODO Future Enhancements:
 * - Add touch/swipe gestures for mobile
 * - Add navigation arrows for desktop
 * - Implement auto-scroll functionality
 * - Add loading skeleton while data is fetching
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChildren(MatSelect) selects!: QueryList<MatSelect>;
  @Input() dataStream!: any[]; // Array of anime items to display in carousel


  selectedValues: string[] = []; // Track selected dropdown values for each item
  isDesktop: boolean = true; // Device type flag for responsive layout

  constructor(private detector:DeviceDetectorService){
    // Detect device type on component initialization
    const isMobile = this.detector.isMobile();
    if (isMobile) {
      this.isDesktop = false;
    }
  }

  /**
   * Update the selected value when user picks an option from dropdown
   * @param index - Index of the carousel item
   * @param event - Selection change event
   */
  updateSelection(index: number, event: any) {
    this.selectedValues[index] = event.value;
  }

  /**
   * Programmatically open the dropdown menu for a specific carousel item
   * Triggered when user clicks the three-dot menu icon
   * @param index - Index of the carousel item
   */
  openDropdown(index: number): void {
    const matSelect = this.selects.toArray()[index];
    if (matSelect) {
      matSelect.open();
    }
  }
}
