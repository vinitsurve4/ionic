import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearestPage } from './nearest.page';

const routes: Routes = [
  {
    path: '',
    component: NearestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearestPageRoutingModule {}
