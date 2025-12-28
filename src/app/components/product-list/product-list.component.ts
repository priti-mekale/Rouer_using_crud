import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/model/product';

type Status = 'pending' | 'cancelled' | 'delivered';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  productArr: Iproduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

  
    this.productService.productSubject.subscribe(res => {
      this.productArr = res;
    });

    
    this.productService.fetchAllPost();
  }

  setStatus(product: Iproduct, status: Status) {
    this.productService.updateStatus(product, status);
  }
}
