import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../produit.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void{
    this.produits = this.produitService.getProduits();
  }

}
