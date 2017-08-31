import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http){
	}

	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
		  .toPromise()
		  .then(response => response.json().data as Hero)
		  .catch(this.handleError);
	}

	getHeroes(): Promise<Hero[]> {
    	return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
	}

	// See the "Take it slow" appendix
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
