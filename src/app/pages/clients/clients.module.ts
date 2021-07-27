import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { clientsPageRoutingModule } from './clients-routing.module';

import { clientsPage } from './clients.page';

import { SearchClientFilterPipe } from './../../pipes/search-client-filter.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    clientsPageRoutingModule
  ],
  declarations: [clientsPage, SearchClientFilterPipe]
})
export class CLientsPageModule {}
