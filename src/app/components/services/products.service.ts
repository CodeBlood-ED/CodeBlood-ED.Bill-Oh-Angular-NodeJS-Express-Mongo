import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductReqModel } from 'src/app/models/ProductReqModel';
import { Observable } from 'rxjs';
import { ProductResModel } from 'src/app/models/ProductResModel';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product:ProductReqModel = new ProductReqModel();
  products: any;

  constructor(private http: HttpClient) {

  }

  addProduct(productDetails: ProductReqModel): Observable<any> {
    const endPoint = 'http://localhost:8080/api/product';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(productDetails);
  
    return this.http.post(endPoint, body, { headers });
  }
  getAllProducts() : Observable<any>{
    const endPoint = 'http://localhost:8080/api';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(endPoint,{headers});
  }

  saveAllProducts(allProducts: any) {
    this.products = allProducts;
  }
  getSavedProducts():any{
    return this.products;
  }

}
