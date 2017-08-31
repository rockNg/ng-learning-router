import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { crisisRoutingModule } from './crisis-routing/crisis-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { crisisService } from './crisis.service';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		crisisRoutingModule
	],
	declarations: [
		CrisisListComponent,
		CrisisDetailComponent,
		CrisisCenterComponent,
		CrisisCenterHomeComponent
	],
	providers: [crisisService]
})
export class CrisisModule { }