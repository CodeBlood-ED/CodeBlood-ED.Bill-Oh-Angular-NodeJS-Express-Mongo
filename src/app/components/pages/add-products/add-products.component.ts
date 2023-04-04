import { Component } from '@angular/core';
import { AddProductsService } from '../../services/add-products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  constructor(private AddProduct: AddProductsService){

  }

  onSubmit(value: any){
    this.AddProduct.saveProduct(value).subscribe((res: any) =>{
      console.log(res.message);
    })
  }
}
