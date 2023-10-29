import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChildren(MatSelect) selects!: QueryList<MatSelect>;
  @Input() dataStream!: any[];
  

  selectedValues: string[] = [];
  isDesktop: boolean = true;

  constructor(private detector:DeviceDetectorService){
    const isMobile = this.detector.isMobile();
    if (isMobile) {
      this.isDesktop = false;
    }
  }

  updateSelection(index: number, event: any) {
    this.selectedValues[index] = event.value;
  }  

  openDropdown(index: number): void {
    const matSelect = this.selects.toArray()[index];
    if (matSelect) {
      matSelect.open();
    }
  }
}
