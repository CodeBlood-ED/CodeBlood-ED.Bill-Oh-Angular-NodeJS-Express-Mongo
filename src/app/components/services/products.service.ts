import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductReqModel } from 'src/app/models/ProductReqModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  product:ProductReqModel = new ProductReqModel();
  products: any;
  coloumnNames: String[] = [];

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

  getSavedProducts():any{
    return this.products;
  }

  setSavedProducts(products: any) {
    this.products = products;
  }

  getColoumnNames() : Observable<any> {
    const endpoint = "http://localhost:8080/api/coloumnList";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(endpoint,{headers});
  }

  setNames(names: Array<String>){
    this.coloumnNames = names;
  }
  
  getNames(){
    return this.coloumnNames;
  }

}
