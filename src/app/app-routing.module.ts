import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MyOrdersComponent } from './views/my-orders/my-orders.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component:NavComponent,canActivate:[AuthGuard], children:[
      {path:'home', component:HomeComponent},
      {path:'orders', component:MyOrdersComponent}
    ]
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
