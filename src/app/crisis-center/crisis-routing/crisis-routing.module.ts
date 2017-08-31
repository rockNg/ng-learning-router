import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { CrisisDetailComponent } from '../crisis-detail/crisis-detail.component';

const crisisesRoutes: Routes = [
	{ path: 'crisises', component: CrisisListComponent },
	{ path: 'crisis/:id', component: CrisisDetailComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(crisisesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class crisisRoutingModule { }