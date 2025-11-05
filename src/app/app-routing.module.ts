import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './smart-components/home/home.component';
import { LandingPageComponent } from './smart-components/landing-page/landing-page.component';
import { RegisterComponent } from './smart-components/register/register.component';
import { AnimeDetailComponent } from './smart-components/anime-detail/anime-detail.component';
import { AnimeReviewsComponent } from './smart-components/anime-reviews/anime-reviews.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-:id', component: AnimeDetailComponent },
  { path: 'about-:id/reviews', component: AnimeReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
