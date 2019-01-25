import { Component, OnInit,Input } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {CategoryModel} from '../../model/category.model';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {

  private txtAmount:number;
  private txtCategory:string;

  @Input('parentData') public amount;

  category:CategoryModel[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit():void {
     this.categoryService.getCategoryData()
     .subscribe(c => this.category = c);
  }

  addNewSavingsCategory(txtAmount:number, txtCategory:string){
      let x:number = this.categoryService.getNewID();
      this.categoryService.add(x, txtAmount, txtCategory);
  }
}