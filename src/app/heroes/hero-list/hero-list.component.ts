import { Component, OnInit } from '@angular/core';;
import { Router } from '@angular/router';
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  private heroes: Hero[];

  constructor(
  	private router: Router,
  	private service: HeroService
  ) { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
	  this.router.navigate(['/hero', hero.id]);
  }

}