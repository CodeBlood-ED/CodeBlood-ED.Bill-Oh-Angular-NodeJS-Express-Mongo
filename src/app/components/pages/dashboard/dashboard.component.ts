import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, forkJoin, map } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  coloumnNames: [] = [];
  sources = [this.productService.getColoumnNames(), this.productService.getAllProducts()];
  products: any;

  constructor(private route:Router,private productService: ProductsService) {
    
    forkJoin(this.sources)
    .pipe(
      map(([coloumns,products]) =>({
      coloumnName: coloumns,
      products: products,
    }))).subscribe(data =>{
      this.coloumnNames = data.coloumnName;
      this.productService.setNames(this.coloumnNames);
      this.products = data.products;
      this.productService.setSavedProducts(this.products);
      console.log(data);
    })
  }

  updateProducts(){
    this.route.navigate(['/update-products']);
  }
  addProducts(){
    this.route.navigate(['/add-products']);
  }
  onClick(){
    this.productService.getAllProducts();
    this.route.navigate(["/inventory"]);
  }
}
