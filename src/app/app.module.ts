import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    CrisisListComponent,
    PageNotFoundComponent
    // ,
    // HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule  //must after HeroesModule, the order is very important
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
