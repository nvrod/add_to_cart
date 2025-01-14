import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public searchTerm !: string;
  public totalItem: number = 0;
  constructor( private CartService: CartService){

  }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res =>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.CartService.search.next(this.searchTerm);
  }
}
