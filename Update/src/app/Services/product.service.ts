import { Product } from './../Shared/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
 // private currentCartCount: new BehaviorSubject(0);
 // currentMessage = this.currentCartCount.asObservable();

 // private dataURL = 'http://localhost:3000/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
}
  addProductToCart(products: any) {
    localStorage.setItem('product', JSON.stringify(products));
    console.log('fun add');
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
    console.log('fun get');
  }

  removeAllProductFromCart() {
    return localStorage.removeItem('product');
    console.log('function remove');

  }

  // errorHandler(error: Response) {
  //   console.log(error);
  //   return throwError(error);
  // }

  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }


}
