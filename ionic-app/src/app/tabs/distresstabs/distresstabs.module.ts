import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistresstabsPageRoutingModule } from './distresstabs-routing.module';

import { DistresstabsPage } from './distresstabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistresstabsPageRoutingModule
  ],
  declarations: [DistresstabsPage]
})
export class DistresstabsPageModule {}
