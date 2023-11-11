import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-library/components/navbar/navbar.component';
import { CardComponent } from './shared-library/components/card/card.component';
import { CarouselComponent } from './shared-library/components/carousel/carousel.component';
import { AutocompleteComponent } from './shared-library/components/autocomplete/autocomplete.component';
import { HomeComponent } from './smart-components/home/home.component';
import { LandingPageComponent } from './smart-components/landing-page/landing-page.component';
import { ImageSectionComponent } from './shared-library/components/image-section/image-section.component';
import { SideMenuComponent } from './shared-library/components/navbar/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CarouselComponent,
    AutocompleteComponent,
    HomeComponent,
    LandingPageComponent,
    ImageSectionComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
