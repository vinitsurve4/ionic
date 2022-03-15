import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteertabsPageRoutingModule } from './volunteertabs-routing.module';

import { VolunteertabsPage } from './volunteertabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteertabsPageRoutingModule
  ],
  declarations: [VolunteertabsPage]
})
export class VolunteertabsPageModule {}
