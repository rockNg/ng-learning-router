import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from '../crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from '../heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { ComposeMessageComponent } from '../compose-message/compose-message.component';

const appRoutes: Routes = [
	{
	  path: 'compose',
	  component: ComposeMessageComponent,
	  outlet: 'popup'
	},
	// { path: 'crisis-center', component: CrisisListComponent },
	{
	    path: 'crisis-center',
	    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
	    data: { preload: true }
	},
	// { path: 'heroes', component: HeroListComponent },
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forRoot(
		appRoutes,
		// { enableTracing: true } // <-- debugging purposes only
	)
  ],
  declarations: [],
  exports: [
	  RouterModule
  ]
})
export class AppRoutingModule { }
