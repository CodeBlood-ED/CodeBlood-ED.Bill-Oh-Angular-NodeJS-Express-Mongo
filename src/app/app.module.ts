import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { UpdateProductsComponent } from './components/pages/update-products/update-products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductsComponent } from './components/pages/add-products/add-products.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UpdateProductsComponent,
    AddProductsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
