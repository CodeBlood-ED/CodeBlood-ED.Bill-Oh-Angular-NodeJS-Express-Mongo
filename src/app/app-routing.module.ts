import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductsComponent } from './components/pages/update-products/update-products.component';
import { AddProductsComponent } from './components/pages/add-products/add-products.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'update-products',component: UpdateProductsComponent},
  {path: 'update-products/:searchTerm' , component:UpdateProductsComponent},
  {path: 'add-products',component: AddProductsComponent},
  {path: 'inventory',component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
