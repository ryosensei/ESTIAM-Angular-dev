import { Injectable } from '@angular/core';
import {Produit} from './Produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }
  produitInterm: Produit[] = [];
  produitsToReturn: Produit[] = [];
  produit: Produit;
  getProduits(): Produit[]{
    return [
      {id:1, nom:"Tasse", categorie:"Maroquinerie", quantite:10},
      {id:2, nom:"Lampe", categorie:"Meubles", quantite:5},
      {id:3, nom:"MacBook", categorie:"High-Tech", quantite:2},
      {id:4, nom:"Enceintes HI-FI", categorie:"High-Tech", quantite:4},
    ]
  }

  getProduitsFromCategorie(categorie: string){
    this.produitInterm = this.getProduits();
    this.produitInterm.forEach(element => {
      if(element.categorie == categorie){
        this.produitsToReturn.push(element);
      }
    });

    return this.produitsToReturn;
  }
}
