import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  {path: 'Products', component:ProduitsComponent},
  {path: 'Categories', component:CategoriesComponent},
  {path: '**', component:ProduitsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategoriesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
