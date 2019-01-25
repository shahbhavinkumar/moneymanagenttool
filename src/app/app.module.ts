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
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,
                  HttpClientModule,
                  HttpClientInMemoryWebApiModule.forRoot(
                    InMemoryDataService, { dataEncapsulation: false }
                  )
                ],
  declarations: [ AppComponent, AllocationComponent,  SavingComponent, SavingsDetailComponent ],
  bootstrap:    [ AppComponent ], 
  providers: [AmountService, 
            CategoryService,
            {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
