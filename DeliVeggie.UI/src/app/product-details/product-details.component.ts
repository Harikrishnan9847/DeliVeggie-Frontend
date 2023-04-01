import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../models/productDetails';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product!: ProductDetails;
  productId!: string | null;
  datePipeString! : string | null;

  constructor(private route: ActivatedRoute,private productService: ProductService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productid'];
    });
    this.productService.getById(this.productId as string).subscribe((product: ProductDetails) => {
      this.datePipeString = this.datePipe.transform(product.entryDate, 'MMM d, y')
      return this.product = product;
    })
  }

}
