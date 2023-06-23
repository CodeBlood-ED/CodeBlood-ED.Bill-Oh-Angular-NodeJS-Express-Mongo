import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  getProductsSubscription = new Subscription();

  constructor(private router:Router,private productService: ProductsService) {

  }

  updateProducts(){
    this.router.navigate(['/update-products']);
  }
  addProducts(){
    this.router.navigate(['/add-products']);
  }
  onClick(){
    this.router.navigate(['/inventory']);
    this.getProductsSubscription = this.productService.getAllProducts().subscribe( data =>{
      console.log('Getting all products');
      this.productService.saveAllProducts(data);
    })
  }

}
