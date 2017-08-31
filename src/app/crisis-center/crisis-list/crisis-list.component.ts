import { Component, OnInit } from '@angular/core';;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { crisisService } from '../crisis.service';
import { crisis } from '../crisis';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  private crisises:  Observable<crisis[]>;
  selectedId: number;

  constructor(
  	private router: Router,
  	private service: crisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.crisises = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getcrisises();
      });
  }

  onSelect(crisis: crisis) {
	  this.router.navigate(['/crisis', crisis.id]);
  }

  isSelected(crisis: crisis) { return crisis.id === this.selectedId; }

}