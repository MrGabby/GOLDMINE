import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoldMineHomeComponent } from './gold-mine-home/gold-mine-home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';


const appRoutes:Routes=[
  {path:'Home', component:GoldMineHomeComponent},
  { path: 'Signin', component: LoginComponent },
  { path: 'RegisterUser', component: RegisterUserComponent },
  { path: 'Gallary', component: GallaryComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GoldMineHomeComponent,
    GallaryComponent,
    LoginComponent,
    RegisterUserComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    CartComponent,
    
    
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
