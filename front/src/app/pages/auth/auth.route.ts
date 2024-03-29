import { Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


export const AUTH_ROUTE:Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
]
