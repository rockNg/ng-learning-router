import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation } from '../../animations';

@Component({
  // selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: CrisisService
  ) { }

  ngOnInit() {
	  // this.route.paramMap
		 //  .switchMap((params: ParamMap) => this.service.getCrisis(+params.get('id')))
		 //  .subscribe((crisis: Crisis) => this.crisis = crisis);

    this.route.data
      .subscribe((ag) => {//data: { crisis: Crisis }
        console.log(ag);
        // this.editName = data.crisis.name;
        // this.crisis = data.crisis;
      });
  }
  
  gotoCrisises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    //1
    // Pass along the crisis id if available
    // so that the crisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);

    //2
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }


}
