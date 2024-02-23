import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {CactivateGuard} from './cactivate.guard';
import { BodyComponent } from './body/body.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full' },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[CactivateGuard]},
  {path:'signup',component:SignupComponent,canActivate:[CactivateGuard]},
  {path:'body',component:BodyComponent},
  {path:'search/:searchItem', component:BodyComponent},
  {path:'tag/:tag',component:BodyComponent},
  {path:'food/:id', component:FoodpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
