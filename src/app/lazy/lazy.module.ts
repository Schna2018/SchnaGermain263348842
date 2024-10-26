import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LazyPageRoutingModule } from './lazy-routing.module';

import { LazyPage } from './lazy.page';
import { HttpClientModule } from '@angular/common/http';
import { SchnaService } from './schna.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LazyPageRoutingModule,
    HttpClientModule
  ],
  providers:[SchnaService],
  declarations: [LazyPage]
})
export class LazyPageModule {}
