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
            loadChildren: () => import('src/app/tabs/tabpages/nearest/nearest.module').then( m => m.NearestPageModule)
          },
        ] 

      },
      {

        path: 'profile',
        children:[
          {
            path: '',
            loadChildren: () => import('src/app/tabs/tabpages/profile/profile.module').then( m => m.ProfilePageModule)
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
