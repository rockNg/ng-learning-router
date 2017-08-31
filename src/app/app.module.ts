import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeroesModule } from './heroes/heroes.module';
import { CrisisModule } from './crisis-center/crisis.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrisisCenterComponent } from './src/app/crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    // CrisisListComponent,
    PageNotFoundComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
    // ,
    // HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,

    HeroesModule,
    CrisisModule,
    AppRoutingModule  //must after HeroesModule, the order is very important
    ,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
