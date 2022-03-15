import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistresstabsPage } from './distresstabs.page';

const routes: Routes = [
  {
    path: '',
    component: DistresstabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistresstabsPageRoutingModule {}
