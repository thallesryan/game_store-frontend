import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudGamesComponent } from './admin/components/crud-games/crud-games.component';
import { AdminComponent } from './admin/views/admin/admin.component';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminGuard } from './guards/admin.guard';
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
      {path:'orders', component:MyOrdersComponent},
      {path:'admin',component:AdminComponent, canActivate:[AdminGuard],children:[{path:'games', component:CrudGamesComponent}]}
    ]
},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
