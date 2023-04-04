import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { sample_products } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class AddProductsService {

  constructor(private http: HttpClient) { }

  getAll():Product[]{
    return sample_products;
  }

  saveProduct(formValue: any){
    return this.http.post('http://localhost:5000',formValue);
  }


}
