import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearestPageRoutingModule } from './nearest-routing.module';

import { NearestPage } from './nearest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearestPageRoutingModule
  ],
  declarations: [NearestPage]
})
export class NearestPageModule {}
