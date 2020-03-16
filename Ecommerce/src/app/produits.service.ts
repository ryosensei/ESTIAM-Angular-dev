import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor() { }

  produits = ['Produit 1', 'Produit 2', 'Produit 4', 'Produit 5'];

  getProduits(){
    return this.produits;
  }
}
