import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';
import { ProductReqModel } from 'src/app/models/ProductReqModel';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  productName='';
  barCode='';
  hsnCode='';
  productMrp='';
  productUnitPrice='';
  productSGST='';
  productCGST='';
  saveSuccesful: boolean = false;

  constructor(private productService: ProductsService){

  }

  onSubmit(formValue: ProductReqModel) {
    console.log(formValue);
    const productReqObj = new ProductReqModel();
    productReqObj.productName = formValue.productName;
    productReqObj.barCode = formValue.barCode;
    productReqObj.hsnCode = formValue.hsnCode;
    productReqObj.productMrp = formValue.productMrp;
    productReqObj.productUnitPrice = formValue.productUnitPrice;
    productReqObj.productCGST = formValue.productCGST;
    productReqObj.productSGST = formValue.productSGST;
    this.productService.addProduct(productReqObj).subscribe(data =>{
       console.log("Service Working");
       if(data){
       this.saveSuccesful = true;
       }
    })
  }
}
