import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any = [];
  public grandTotal: number = 0;
  constructor( private CartService: CartService){

  }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.CartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.CartService.removeCartItem(item);
  }

}

