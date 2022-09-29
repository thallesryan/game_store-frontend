import { GamesComponent } from './views/games/games.component';
import { CartComponent } from './views/cart/cart.component';
import { GameEditComponent } from './admin/components/game-edit/game-edit.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudGamesComponent } from './admin/components/crud-games/crud-games.component';
import { GameCreateComponent } from './admin/components/game-create/game-create.component';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MyOrdersComponent } from './views/my-orders/my-orders.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';
import { AdminComponent } from './admin/views/admin/admin.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component:NavComponent,canActivate:[AuthGuard], children:[
      {path:'home', component:HomeComponent},
      {path:'games', component:GamesComponent},
      {path:'orders/:id', component:MyOrdersComponent},
      {path:'cart', component:CartComponent},
      {path:'admin',component:AdminComponent, canActivate:[AdminGuard],
        children:[{path:'games', component:CrudGamesComponent}, 
                  {path:'games/newgame', component:GameCreateComponent},
                  {path:'games/update/:id', component: GameEditComponent},
                  {path:'users', component: UserListComponent},
                ]
      }
    ]
},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
