import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../data/product';

@Component({
  selector: 'app-gold-mine-home',
  templateUrl: './gold-mine-home.component.html',
  styleUrls: ['./gold-mine-home.component.css']
})
export class GoldMineHomeComponent implements OnInit {
 


  // imgPath:string = "/g2.jpg"
  // imgPat1:string = "/22.jpg"
  // imgPath2:string = "/33.jpg"
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
