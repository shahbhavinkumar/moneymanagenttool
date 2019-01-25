import { InMemoryDbService } from 'angular-in-memory-web-api';
import {CategoryModel} from './model/category.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
      const categories =[
        {id:1, amount:2500, name:"Rent" }
      ];
      return {categories}
    }
  
    genId(c: CategoryModel[]): number {
        return CategoryModel.length > 0 ? Math.max(...c.map(category => category.id)) + 1 : 11;
    }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
 /* genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }*/
}