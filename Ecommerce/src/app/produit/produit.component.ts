import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  // produits = ['Produit 1', 'Produit 2', 'Produit 4', 'Produit 5'];

  constructor() { 
  }

  ngOnInit(): void {
  }

  ajouterAuPanier(){

  }

}
