import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';

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

export const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
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
