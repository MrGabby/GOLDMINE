import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { GoldmineService } from '../goldmine.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  carditem:Product[]=[];

  imgbasePath:string = "../assets/";
  products: Product[] = [];
  message:string="" ;
  isError : boolean = false;
  statusMessage : string = "Product loading....."
  constructor(private goldmineservice:GoldmineService) { }

  ngOnInit(): void {
    this.loadProductData();
  }
  loadProductData(){
     this.goldmineservice.getproducts().subscribe((data:{}) => {
    this.products = <Product[]>data;
   // console.log(this.products); 
     
     },(error)=>{
      console.log(error);
      this.isError = true;
       this.statusMessage = "Error in the serve.Please wait";
     });
  }

  LoadByName(val:string):void{
    this.goldmineservice.getProductByName(val).subscribe((data:{})=>{
      this.products = <Product[]>data;
      console.log(this.products);
      console.log(this.message)
  });
  }

addtocart(p:Product):void{
this.carditem.push(p);
this.goldmineservice.AddCartMethod(this.carditem);
}

}