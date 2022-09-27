import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;


  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    //subscribe to price event on cart service
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    //subscribe to quantity event on cart service
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )

    
  }

  

}
