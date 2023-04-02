import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { ProductDetails } from '../models/productDetails';
import { PRODUCTS } from '../mock-data/mock-products';
import { PRODUCT_DETAILS } from '../mock-data/mock-product-details';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:44350/api/';
  constructor(private http: HttpClient) { }

  getAll() : Observable<Product[]>
  {
    return this.http.get<any>(this.baseUrl + 'Product/GetAll');
    //return of(PRODUCTS);
  }

  getById(id: string): Observable<ProductDetails>
  {
    return this.http.get<any>(this.baseUrl + 'product/Get/' + id);
    //return of(PRODUCT_DETAILS)
  }

}
