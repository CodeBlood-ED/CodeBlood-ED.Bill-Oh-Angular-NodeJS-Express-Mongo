import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent{
  
  coloumnNames: String[] = []
  products:any;
  constructor(private productService: ProductsService){
    this.coloumnNames = this.productService.getNames();
    this.products = this.productService.getSavedProducts();
  }
}
