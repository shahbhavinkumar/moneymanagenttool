import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { AllocationComponent } from './allocation/allocation.component';
import { SavingComponent } from './allocation/saving/saving.component';
import {AmountService} from './service/amount.service';
import {CategoryService} from './service/category.service';
import { SavingsDetailComponent } from './allocation/savings-detail/savings-detail.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AllocationComponent,  SavingComponent, SavingsDetailComponent ],
  bootstrap:    [ AppComponent ], 
  providers: [AmountService, 
            CategoryService,
            {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
