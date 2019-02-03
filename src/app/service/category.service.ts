import { Category } from '../data/category';
import { of, Observable } from 'rxjs';
import {CategoryModel} from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService
{

  constructor(
    private http: HttpClient) { }

    private webApiURL = '/in-memory-data-service/Category'; 

   /* getCategoryData(): Observable<CategoryModel[]>{
      return of(Category);
    }
    */
    getCategoriesFromHttp (): Observable<CategoryModel[]> {
      return this.http.get<CategoryModel[]>(this.webApiURL).pipe(
        catchError(this.handleError('getCategoriesFromHttp', []))
      );
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


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}