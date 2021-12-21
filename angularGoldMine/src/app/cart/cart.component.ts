import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { GoldmineService } from '../goldmine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] =[];
  imgbasePath:string = "../assets/";

  constructor(
    private goldmineservice:GoldmineService
  ) { }

  ngOnInit(): void {
    this.displaycartdata();
  }

  displaycartdata():void{
    this.products = this.goldmineservice.GetCartMethod();
  }

  removeorder(p:Product):void{
    this.products = this.products.filter(item => item !==p);
  this.goldmineservice.AddCartMethod(this.products);
  }

}
