import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroRoutingModule } from './hero-routing/hero-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HeroRoutingModule
	],
	declarations: [
		HeroListComponent,
		HeroDetailComponent
	],
	providers: [HeroService]
})
export class HeroesModule { }