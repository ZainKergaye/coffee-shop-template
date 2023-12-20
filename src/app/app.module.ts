import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyLoadImageModule} from 'ng-lazyload-image';



import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WhereToFindComponent } from './where-to-find/where-to-find.component';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    WhereToFindComponent,
    PopularItemsComponent,
    HomepageComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
