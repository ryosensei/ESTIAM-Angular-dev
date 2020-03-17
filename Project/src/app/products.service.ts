import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable, of } from 'rxjs';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get<Product[]>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data =>{
      console.log(data);
    })
    return PRODUCTS;
  }
}
