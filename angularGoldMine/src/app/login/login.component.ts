import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../data/Customer';
import { GoldmineService } from '../goldmine.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
   ans:boolean=false;
getCustomerData:Customer=new Customer();
  
  constructor(
   private goldmineservice:GoldmineService,
    private route: ActivatedRoute,
  ) { }

  emailId:string = '';
  password:string='';
  

  ngOnInit(): void {
 
  }



  CheckLogin(mail:string,pass:string):void{
    this.goldmineservice.getCustomerDetails(mail,pass).subscribe((data:Customer)=>{
    if(data.customername==null){
      alert("Not found in database");
    }else{
      let key='user';
      localStorage.setItem('key',JSON.stringify(data));
     
      this.getCustomerData.customername=data.customername;
      this.getCustomerData.emailid=data.emailid;
      this.getCustomerData.mobileno=data.mobileno;
      this.getCustomerData.password=data.password;
      alert("LogIn Successfull" + "   " + "Welcome "+ this.getCustomerData.customername + " to GoldMine");
       } 
       
      

  });


  
// loginMethod(email:string,pass:string):void{
//   this.goldmineservice.getCustomerDetails(this.email,this.pass).subscribe((data:Customer)=>{
//  if(data.customername == null){
//    alert("Not Found");
//  }else{
//    alert("Login Successfull");
//  }
//   console.log(data.customername);

    // console.log(val);
    // console.log(this.products);
    // this.electroservice.getProductByName(val);
  //});
// });


//   CheckLogin(mail:string,pass:string):void{
//     this.goldmineservice.getBooleanCheck(mail,pass).subscribe((data:Customer)=>{
//     if(data.customername==null){
//       alert("Not found in database");
//     }else{
//       let key='user';
//       localStorage.setItem('key',JSON.stringify(data));
//       this.getCustomerData.customername=data.customername;
//       this.getCustomerData.emailid=data.emailid;
//       this.getCustomerData.mobileno=data.mobileno;
//       this.getCustomerData.password=data.password;
//       this.goldmineservice.SetCustomerName(data.customername)
//  alert("Name:"+data.customername+"\nMobileNo:"+data.mobileno+"\nEmailId:"+data.emailid);
//     }

//});
// }
// }
}
}




