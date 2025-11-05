import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-library/components/navbar/navbar.component';
import { CardComponent } from './shared-library/components/card/card.component';
import { CarouselComponent } from './shared-library/components/carousel/carousel.component';
import { HomeComponent } from './smart-components/home/home.component';
import { LandingPageComponent } from './smart-components/landing-page/landing-page.component';
import { ImageSectionComponent } from './shared-library/components/image-section/image-section.component';
import { SideMenuComponent } from './shared-library/components/navbar/side-menu/side-menu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './shared-library/services/fake-backend.interceptor';
import { RegisterComponent } from './smart-components/register/register.component';
import { AnimeDetailComponent } from './smart-components/anime-detail/anime-detail.component';
import { AnimeReviewsComponent } from './smart-components/anime-reviews/anime-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CarouselComponent,
    HomeComponent,
    LandingPageComponent,
    ImageSectionComponent,
    SideMenuComponent,
    RegisterComponent,
    AnimeDetailComponent,
    AnimeReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
