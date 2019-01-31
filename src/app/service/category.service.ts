import { Category } from '../data/category';
import { of, Observable } from 'rxjs';
import {CategoryModel} from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService
{

  constructor(
    private http: HttpClient) { }

    private heroesUrl = '/in-memory-data-service/categories'; 

    getCategoryData(): Observable<CategoryModel[]>{
      return of(Category);
    }

    
    getCategoriesFromHttp (): Observable<CategoryModel[]> {
      return this.http.get<CategoryModel[]>(this.heroesUrl)
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