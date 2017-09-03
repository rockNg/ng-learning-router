import { Component, OnInit } from '@angular/core';;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  private crises:  Observable<Crisis[]>;
  selectedId: number;

  constructor(
  	private router: Router,
  	private service: CrisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.crises = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      });
  }

  onSelect(crisis: Crisis) {
    //1
	  // this.router.navigate(['/crisis-center', crisis.id]);

    //2
    this.selectedId = crisis.id;
    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

}