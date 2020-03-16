import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  produits = ['article 1', 'article 2', 'article 3', 'article 4' ];

  constructor() { }

  ngOnInit(): void {
  }

}
