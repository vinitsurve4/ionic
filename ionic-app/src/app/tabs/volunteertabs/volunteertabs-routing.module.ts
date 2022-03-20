import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearestPage } from '../tabpages/volunteertabpages/nearest/nearest.page';

import { VolunteertabsPage } from './volunteertabs.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteertabsPage,
    children:[
      {

        path: 'nearest',
        children:[
          {
            path: 'nearest',
            loadChildren: () => import('src/app/tabs/tabpages/volunteertabpages/nearest/nearest.module').then( m => m.NearestPageModule)
          },
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteertabsPageRoutingModule {}
