import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { crisis } from './crisis';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class crisisService {

	private crisisesUrl = 'api/crisises';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http){
	}

	getcrisis(id: number): Promise<crisis> {
		const url = `${this.crisisesUrl}/${id}`;
		return this.http.get(url)
		  .toPromise()
		  .then(response => response.json().data as crisis)
		  .catch(this.handleError);
	}

	getcrisises(): Promise<crisis[]> {
    	return this.http.get(this.crisisesUrl)
               .toPromise()
               .then(response => response.json().data as crisis[])
               .catch(this.handleError);
	}

	// See the "Take it slow" appendix
	getcrisisesSlowly(): Promise<crisis[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getcrisises()), 2000);
		});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
