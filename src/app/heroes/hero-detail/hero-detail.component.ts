import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero: Hero;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: HeroService
  ) { }

  ngOnInit() {
	  this.route.paramMap
		  .switchMap((params: ParamMap) => this.service.getHero(+params.get('id')))
		  .subscribe((hero: Hero) => this.hero = hero);
  }
  
  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }


}
