import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }
}
