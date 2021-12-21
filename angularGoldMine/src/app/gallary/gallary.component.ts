import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  imgbasePath:string = "../assets/recent gold/"

  
  imgPath:string = "/gd2.jpg"
  imgPath1:string = "/gd3.jpg"
  imgPath2:string = "/gd4.jpg"
  imgPath3:string = "/gd5.jpg"
  imgPath4:string = "/gd6.jpg"
  imgPath5:string = "/gd7.jpg"
  imgPath6:string = "/gd8.jpg"
  imgPath7:string = "/gd9.jpg"
  imgPath8:string = "/gd10.jpg"
  imgPath9:string = "/gd11.jpg"
  imgPath10:string = "/gd12.jpg"
  imgPath11:string = "/gd13.jpg"
  imgPath12:string = "/gd14.jpg"

  imgPath24:string = "../assets/sliver/01.jpg"
  imgPath13:string = "../assets/sliver/02.jpg"
  imgPath14:string = "../assets/sliver/03.jpg"
  imgPath15:string = "../assets/sliver/04.jpg"
  imgPath16:string = "../assets/sliver/05.jpg"
  imgPath17:string = "../assets/sliver/06.jpg"
  imgPath18:string = "../assets/sliver/07.jpg"
  imgPath19:string = "../assets/sliver/08.jpg"
  imgPath20:string = "../assets/sliver/09.jpg"
  imgPath21:string = "../assets/sliver/10.jpg"
  imgPath22:string = "../assets/sliver/11.jpg"
  imgPath23:string = "../assets/sliver/12.jpg"

  
  imgPath25:string = "../assets/Diamond/01.jpg"
  imgPath26:string = "../assets/Diamond/02.jpg"
  imgPath27:string = "../assets/Diamond/03.jpg"
  imgPath28:string = "../assets/Diamond/04.jpg"
  imgPath29:string = "../assets/Diamond/05.jpg"
  imgPath30:string = "../assets/Diamond/06.jpg"
  imgPath31:string = "../assets/Diamond/07.jpg"
  imgPath32:string = "../assets/Diamond/08.jpg"
  imgPath33:string = "../assets/Diamond/09.jpg"
  imgPath34:string = "../assets/Diamond/10.jpg"
  imgPath35:string = "../assets/Diamond/11.jpg"
  imgPath36:string = "../assets/Diamond/12.jpg"
  imgPath37:string = "../assets/Diamond/13.jpg"

  imgPath38:string = "../assets/Platinum/01.jpg"
  imgPath39:string = "../assets/Platinum/02.jpg"
  imgPath40:string = "../assets/Platinum/03.jpg"
  imgPath41:string = "../assets/Platinum/04.jpg"
  imgPath42:string = "../assets/Platinum/05.jpg"
  imgPath43:string = "../assets/Platinum/06.jpg"
  imgPath44:string = "../assets/Platinum/07.jpg"
  imgPath45:string = "../assets/Platinum/08.jpg"
  imgPath46:string = "../assets/Platinum/09.jpg"
  imgPath47:string = "../assets/Platinum/10.jpg"
  imgPath48:string = "../assets/Platinum/11.jpg"
  imgPath49:string = "../assets/Platinum/12.jpg"
  imgPath50:string = "../assets/Platinum/13.jpg"


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
  }

  

}
