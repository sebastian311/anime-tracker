import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, throttleTime, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navbarWrapper') navbarWrapper!: ElementRef<HTMLElement>;

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
}
