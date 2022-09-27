import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails(): void {
    const theProductId = this.route.snapshot.paramMap.get("id");
    this.productService.getProductDetails(theProductId).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.product = data
      }
    )
  }


  addToCart(){
      console.log(`product to add is ${this.product.name} and price is ${this.product.price}`)
      const theCartItem = new CartItem(this.product);
      this.cartService.addToCart(theCartItem);
  }

}
