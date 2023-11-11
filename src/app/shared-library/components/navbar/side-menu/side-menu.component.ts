import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() menuActive: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();
  isLogged = false;

  onCloseMenu() {
    this.closeMenu.emit();
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;

    if (!this.menuActive) this.onCloseMenu();
  }
}
