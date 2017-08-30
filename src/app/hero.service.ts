import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	// See the "Take it slow" appendix
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}
}
