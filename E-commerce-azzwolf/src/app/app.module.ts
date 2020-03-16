import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategorieComponent } from './categorie/categorie.component';

const appRoutes: Routes = [
  {path:  'produits', component: ProduitsComponent },
  {path:  'categorie', component: CategorieComponent },
  {path:  '**', component: CategorieComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
