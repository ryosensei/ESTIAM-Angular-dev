import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';
import { Product } from '../product';
import { Category } from '../category';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    allProducts: Product[];
    products: Product[];
    categories: Category[];

    constructor(private ProductsService: ProductsService, private CategoriesService: CategoriesService) {
    }

    filter(categoryId)
    {
      if (categoryId == -1) {
        this.products = this.allProducts;
      } else {
        let filteredProducts = [];
        this.allProducts.forEach((elem) => {
            if (elem.category_id == categoryId) {
                filteredProducts.push(elem);
            }
        });

        this.products = filteredProducts;
      }
    }

    addToCart(product: string)
    {
        alert(product);
    }

    getProducts(): void {
        this.allProducts = this.ProductsService.getProducts();
        this.products = this.ProductsService.getProducts();
    }

    getCategories(): void {
        this.categories = this.CategoriesService.getCategories();
    }

    ngOnInit(): void {
        this.getCategories();
        this.getProducts();
    }

}
