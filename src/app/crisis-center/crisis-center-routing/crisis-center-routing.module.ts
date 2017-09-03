import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CrisisCenterRoutingModule { }
*/

import { CrisisCenterComponent } from '../crisis-center.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { CrisisDetailComponent } from '../crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from '../crisis-center-home/crisis-center-home.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
