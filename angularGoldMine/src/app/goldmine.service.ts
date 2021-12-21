import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './data/product';
import { catchError,Observable, throwError } from 'rxjs';
import { Customer } from './data/Customer';

@Injectable({
  providedIn: 'root'
})
export class GoldmineService {
  carditemservice:Product[]=[];

  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }


  AddCartMethod(passedata:Product[]){
    this.carditemservice=passedata;
   
  }

  GetCartMethod():Product[]{
    return this.carditemservice;
  }

private readonly baseUrl = "http://localhost:50558/api/"
private readonly baseurl = "http://localhost:58537/api/"
  // message:string=" ";
  customername:string=" ";
  // setMessage(data:any){
  //   this.message=data;
  // }
  // getMessage(){
  //   return this.message;
  // }

  // SetCustomerName(name:string){
  //   this.customername=name;
  // }
 getCustomerName():string{
    return this.customername;
  }

  constructor(private http: HttpClient) { }
  
  getproducts(): Observable<Product>{
    return this.http.get<Product>( "http://localhost:50558/api/product")
  .pipe(
  catchError(this.errorHandler) 
   )
  ;
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(()=> Error("Error in the server side"))
  }

  InsertCustomer(customername:string,email:string,password:string,mobileno:string):Observable<boolean>{
    return this.http.get<boolean>(this.baseurl+"/customer/Get?customername="+customername+"&email="+email+"&password="+password+"&mobileno="+mobileno+"");
    
  }

  getProductByName(productname:string):Observable<Product>{
    return  this.http.get<Product>(this.baseUrl+"product?searchkey="+productname);
  }


// getBooleanCheck(email:string,password:string):Observable<Customer>{
//   return this.http.get<Customer>(this.baseurl+"/customer/GetCheckLoginData?email="+email+"&password="+password+"");
//  }

 getCustomerDetails(emailid :string,password :string):Observable<Customer>{
return this.http.get<Customer>("http://localhost:58537/api/customer/GetCheckLoginData?email="+emailid+"&password="+password );
 }


  authenticateUser(emailId:string, password:string){
    let options = {headers: {'Content-Type': 'application/json'}};
    let data = {
      "Email": emailId,
      "Password": password
    };
    this.http.post<any>(this.baseurl+"LoginRegister", JSON.stringify(data), options).subscribe(
      (t: any) => console.info(JSON.stringify(t))
    );
  }
}