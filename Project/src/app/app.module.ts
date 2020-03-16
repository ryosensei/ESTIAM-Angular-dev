import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
const appRoutes : Routes = [
  {path: 'Accueil', component: AccueilComponent},
  {path: 'Produits', component: ProduitsComponent},
  {path: 'Panier', component: PanierComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
