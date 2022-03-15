import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteertabsPage } from './volunteertabs.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteertabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteertabsPageRoutingModule {}
