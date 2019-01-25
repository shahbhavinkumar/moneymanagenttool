import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SavingsDetailComponent} from './allocation/savings-detail/savings-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: SavingsDetailComponent },

];

@NgModule({
  exports: [ RouterModule ], 
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {}