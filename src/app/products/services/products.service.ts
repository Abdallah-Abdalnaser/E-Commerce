import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private https:HttpClient) { }

  GetAllproducts() {
    return this.https.get("https://fakestoreapi.com/products");
  }

  GetCategory() {
    return this.https.get("https://fakestoreapi.com/products/categories");
  }
}
