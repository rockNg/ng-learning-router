import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HeroService } from '../../Hero.service';
import { Hero } from '../../Hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: HeroService
  ) { }

  ngOnInit() {
	  this.route.paramMap
		  .switchMap((params: ParamMap) =>
			  this.service.getHero(params.get('id')))
		  .subscribe((hero: Hero) => this.hero = hero);
  }

}
