import { Component } from '@angular/core';
import { AddProductsService } from '../../services/add-products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  products:Product[] = []
  constructor(private addProd: AddProductsService){
    this.products = this.addProd.getAll();
  }
}
