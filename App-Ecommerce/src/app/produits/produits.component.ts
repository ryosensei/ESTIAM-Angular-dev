import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  //Fonction qui fait appel à JQuery pour masquer ou afficher le titre de la page.

  
 
  constructor() { }

  ngOnInit(): void {
  $('.Liste button').on('click',function(){
	alert($(this).attr('id'));
  });
}

}
