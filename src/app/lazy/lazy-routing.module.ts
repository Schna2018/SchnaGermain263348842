import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyPage } from './lazy.page';

const routes: Routes = [
  {
    path: '',
    component: LazyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyPageRoutingModule {}
