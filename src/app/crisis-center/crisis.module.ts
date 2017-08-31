import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { crisisRoutingModule } from './crisis-routing/crisis-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { crisisService } from './crisis.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		crisisRoutingModule
	],
	declarations: [
		CrisisListComponent,
		CrisisDetailComponent
	],
	providers: [crisisService]
})
export class CrisisModule { }