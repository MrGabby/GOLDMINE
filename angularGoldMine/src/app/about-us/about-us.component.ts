import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  imgbasePath:string = "../assets/"

  imgPath:string = "4.png"
  imgPath1:string = "jessi.jpg"
  imgPath2:string = "chipsa.jpg"
  imgPath3:string = "manya.jpg"
  imgPath4:string = "mrunu.jpg"
  imgPath5:string = "Nilya.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
