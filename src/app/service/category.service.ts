import { Category } from '../data/category';
import { of, Observable } from 'rxjs';
import {CategoryModel} from '../model/category.model';

export class CategoryService
{
    getCategoryData(): Observable<CategoryModel[]>{
      return of(Category);
    }

    add(id:number, amount:number,category:string){
      Category.push({id:id, amount:amount, name:category});
    }

    //Adding +1 to the current ID
    getNewID(){
      return Category[Category.length-1].id+1;
    }

    getCategory(id:number): Observable<CategoryModel>{
      return of(Category.find(c => c.id === id));
    }
}