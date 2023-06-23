import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  
  products:any;
  constructor(private productService: ProductsService){
    this.products = this.productService.getSavedProducts();
  }
}
