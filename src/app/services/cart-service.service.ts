import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    console.log("INSIDE CART SERVICES")
    //check if item already in cart
    let isPresent: boolean = false;
    let existingCartItem!: CartItem;

    if(this.cartItems.length > 0){
          //find item in cart based on item id
          this.cartItems.forEach(element => {
            console.log(element);
          });

        existingCartItem =  this.cartItems.find(tempItem => tempItem.categoryId === theCartItem.categoryId)!
      
    }

    //check if we have found the item
    isPresent = true ? existingCartItem! != null : false;
    console.log(`is Present value: ${isPresent}`)
    if(isPresent){
      console.log(`calling if part`)
      // if existing, increment the quantity
      existingCartItem.quantity++;
      console.log(`${existingCartItem.quantity}`)

    }else {
      //else add to the cart array
      console.log(`calling else part`)
      this.cartItems.push(theCartItem)
    }
//compute the totals
    this.computeTotals();
  }


  computeTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values, rememember we are using subject for the totals

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    console.log("----------------------------")

    console.log(`total price value is ${totalPriceValue.toFixed(2)} and quantity is ${totalQuantityValue}`)

    console.log("----------------------------")

    this.cartItems.forEach(item => {
      console.log(item)
    })

  }

  
}
