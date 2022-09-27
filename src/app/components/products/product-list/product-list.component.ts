import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cart: CartItem[] = [];
  products: Product[] = [];
  productCategory: ProductCategory[] = [];
  currentCategoryName: string = "";
  categoryId: string = "";
  searchMode: boolean = false;


  constructor(private productListService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    this.listCategory();
  }

  addToCart(theProduct: Product){
    console.log(`Product parsed ${theProduct.name}`)
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }


  listCategory() {
    this.productListService.listAllCategory().subscribe(
      data => this.productCategory = data

    )
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has("keyword"); //keyword is from the route in app-routing.ts

    if (this.searchMode) {
      this.handleSearchProducts();
    } else
      this.handleListProducts();
  }

  handleSearchProducts(){
    const theKeyword = this.route.snapshot.paramMap.get("keyword")!;
    this.productListService.searchProducts(theKeyword).subscribe(
      data =>{
        console.log(JSON.stringify(data));
      this.products = data
      }
    )
  }

  handleListProducts() {
    this.currentCategoryName = this.route.snapshot.paramMap.get("name")!;
    const hasCategoryName: boolean = this.route.snapshot.paramMap.has('name');

    if (hasCategoryName && this.currentCategoryName.length <= 30) {
      //get the id and convert it to a number
      this.productListService.getProductCategory(this.currentCategoryName).subscribe(
        data => {
          this.products = data;
        }
      )
    }
    else if (hasCategoryName && this.currentCategoryName.length >= 30) {
      this.productListService.getProductCategoryById(this.currentCategoryName).subscribe(
        data => this.products = data
      )
    }
    else
      //get the product for the category
      this.productListService.getProductList().subscribe(
        data => {
          console.log("Product Categories" + JSON.stringify(data));
          this.products = data;
        }
      )
  }

}
