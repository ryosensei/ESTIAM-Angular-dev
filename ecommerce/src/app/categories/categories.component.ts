import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../Categorie';
import { ProduitService } from '../produit.service';
import { Produit } from '../Produit';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  produits: Produit[] = [];
  produitsToDisplay: Produit[] = [];
  constructor(private categorieService: CategorieService,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categories = this.categorieService.getCategories();
  }

  getProduitsFromCategorie(categorie: string) {
    this.produits = this.produitService.getProduitsFromCategorie(categorie);
  }

  getProduitFromCategorieDisplay(categorie: string): Produit[] {
    this.produits.forEach(element => {
      if (categorie == element.categorie) {
        this.produitsToDisplay.push(element);
      }
    });

    return this.produitsToDisplay;
  }

  onClick(categorie: string) {
    var el = document.getElementById("prod");
    if(el !== null){
      el.parentNode.removeChild(el);
    }

    this.produits = []
    this.getProduitsFromCategorie(categorie)
  }
}
