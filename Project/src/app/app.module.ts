import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { PanierComponent } from './panier/panier.component';




const appRoutes: Routes = [
  { path: 'cat', component: CatComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    PanierComponent,

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
