import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-library/components/navbar/navbar.component';
import { CardComponent } from './shared-library/components/card/card.component';
import { CarouselComponent } from './shared-library/components/carousel/carousel.component';
import { AutocompleteComponent } from './shared-library/components/autocomplete/autocomplete.component';
import { HomeComponent } from './smart-components/home/home.component';
import { LandingPageComponent } from './smart-components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CarouselComponent,
    AutocompleteComponent,
    HomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
