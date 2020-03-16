import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return PRODUCTS;
  }
}
