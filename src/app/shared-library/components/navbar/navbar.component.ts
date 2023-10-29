import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, throttleTime, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('navbarWrapper') navbarWrapper!: ElementRef<HTMLElement>;
  menuActive = false;
  isLogged = false;

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
  
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
