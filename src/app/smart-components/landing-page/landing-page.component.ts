import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private detector:DeviceDetectorService, private router: Router){
    const isMobile = this.detector.isMobile();
    if (isMobile) {
      this.router.navigate(['/home']);
    }
  }
}
