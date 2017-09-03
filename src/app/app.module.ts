import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
// import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AdminModule } from './admin/admin.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';
// import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
// import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { LoginRoutingModule }      from './login-routing/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    // CrisisListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
    // AdminComponent,
    // AdminDashboardComponent,
    // ManageHeroesComponent,
    // CrisisCenterComponent,
    // CrisisCenterHomeComponent
    // ,
    // HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,

    AdminModule,
    HeroesModule,
    LoginRoutingModule,
    CrisisCenterModule,
    AppRoutingModule  //must after HeroesModule, the order is very important
    ,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
