import { Injectable } from '@angular/core';
import {Categorie} from './Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  getCategories(): Categorie[]{
    return[
      {id:1, nom:"Maroquinerie"},
      {id:1, nom:"Meubles"},
      {id:1, nom:"High-Tech"}
    ]
  }
}
