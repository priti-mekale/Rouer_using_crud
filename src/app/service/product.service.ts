import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productArr: Iproduct[] = [
    { name: 'Samsung', desc: 'Product status is', status: 'pending' }
  ];

 
 
  // Subject to notify components
  productSubject = new Subject<Iproduct[]>();

  // fetch products
  fetchAllPost() {
    this.productSubject.next(this.productArr);
  }

  // add product
  addPost(product: Iproduct) {
    this.productArr.unshift(product);
    this.productSubject.next(this.productArr);
  }


  updateStatus(product: Iproduct, status: Iproduct['status']) {
    product.status = status;
    this.productSubject.next(this.productArr);
  }
}

