import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @ViewChild('postForm') postForm!: NgForm;

  constructor(private productService: ProductService) {}

  addPost() {
    if (this.postForm.valid) {

      const newObj: Iproduct = {
        ...this.postForm.value,
        status: 'pending'
      };


      this.productService.addPost(newObj);

      this.postForm.reset();
    }
  }
}
