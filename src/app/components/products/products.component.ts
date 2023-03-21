import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public ProductList : any;
  constructor( private api:ApiService, private CartService:CartService ){

  }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;

      this.ProductList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.ProductList)
    });

  }

  addToCart(item:any){
    this.CartService.addtoCart(item)
  }
}
