import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { crisisService } from '../crisis.service';
import { crisis } from '../crisis';

import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis: crisis;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: crisisService
  ) { }

  ngOnInit() {
	  this.route.paramMap
		  .switchMap((params: ParamMap) => this.service.getcrisis(+params.get('id')))
		  .subscribe((crisis: crisis) => this.crisis = crisis);
  }
  
  gotocrisises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the crisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crisises', { id: crisisId, foo: 'foo' }]);
  }


}
