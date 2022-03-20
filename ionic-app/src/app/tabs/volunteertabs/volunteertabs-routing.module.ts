import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
            path: '',
            loadChildren: () => import('src/app/nearest/nearest.module').then( m => m.NearestPageModule)
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
