import { Component, OnInit } from '@angular/core';;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  private heroes:  Observable<Hero[]>;
  selectedId: number;

  constructor(
  	private router: Router,
  	private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
  }

  onSelect(hero: Hero) {
	  this.router.navigate(['/hero', hero.id]);
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }

}