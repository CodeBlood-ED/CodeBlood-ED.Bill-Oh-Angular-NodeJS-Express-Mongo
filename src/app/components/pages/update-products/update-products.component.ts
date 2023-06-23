import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent{

  barcode:string ='';

  constructor(private productService: ProductsService, private router:Router){

  }

  onSubmit(data:any){
    console.log(data); 
  }

  onSearch(searchTerm:string):void{
    if(searchTerm){
      this.router.navigateByUrl('/update-products/'+ searchTerm);
    }
  }

}
