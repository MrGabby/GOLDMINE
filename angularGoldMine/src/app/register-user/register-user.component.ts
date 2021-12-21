import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GoldmineService } from '../goldmine.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private goldmineservice:GoldmineService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  newRegistration(name:string,mail:string,mobileno:string,pass:string):void{
 
      this.goldmineservice.InsertCustomer(name,mail,pass,mobileno).subscribe((data:boolean)=>{
        if(data==true){
          alert("Added Successfully");
        }else{
          alert("Something went wrong...!");
        }
        
    });
  }

}
