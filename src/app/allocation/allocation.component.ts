import { Component, OnInit } from '@angular/core';
import {AmountService} from '../service/amount.service';
import {CategoryModel} from '../model/category.model';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  private calculatedAmount: number;
  private percentage: number;
  private amount: number;
  private isSplitEnabled : boolean = false;
  constructor(private amountService:AmountService) { }

  ngOnInit() {
  }

  submitAmount()
  {
    if(this.amount > 0 && this.percentage > 0){
      this.isSplitEnabled = true;
      this.calculatedAmount = Math.round(this.amountService.calculateSavings(this.amount,this.percentage));
    }
    else{
      alert('Gotta put the values daug')
    }
  }

}