import { Component, OnInit } from '@angular/core';
import { Product } from './data/product';
import { GoldmineService } from './goldmine.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent  {
customername:string= "";
products:Product[]=[];


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  

  constructor(private goldmineservice:GoldmineService){}

  //loadcustomername():void{
  //   this.customername=this.goldmineservice.getCustomerName();
  // }

  
  imgbasePath:string = "../assets"
  imgPath3:string = "/3.png"

  title = 'angularGoldMine';
}
