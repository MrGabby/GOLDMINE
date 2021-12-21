import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { GoldMineHomeComponent } from './gold-mine-home/gold-mine-home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterUserComponent } from './register-user/register-user.component';



const routes: Routes = [
 
  {path:'Home', component: GoldMineHomeComponent},
  {path:'Signin', component: LoginComponent},
  {path:'RegisterUser', component: RegisterUserComponent},
  {path:'Gallery', component: GallaryComponent},
  {path:'AboutUs', component: AboutUsComponent},
  {path:'ContactUs', component: ContactUsComponent},
  {path:'products', component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
