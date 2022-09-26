import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { GamesDestaqueComponent } from './components/games-destaque/games-destaque.component';
import { MyOrdersComponent } from './views/my-orders/my-orders.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { LoginComponent } from './views/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { CrudGamesComponent } from './admin/components/crud-games/crud-games.component';
import { AdminComponent } from './admin/views/admin/admin.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { GameCreateComponent } from './admin/components/game-create/game-create.component' 
import { NgxMaskModule } from 'ngx-mask';
import { GameEditComponent } from './admin/components/game-edit/game-edit.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';
import { CartComponent } from './views/cart/cart.component';
import { GamesComponent } from './views/games/games.component';
import { GameCardComponent } from './components/game-card/game-card.component';


registerLocaleData(localePt) 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GamesDestaqueComponent,
    MyOrdersComponent,
    OrdersHistoryComponent,
    LoginComponent,
    FormLoginComponent,
    CrudGamesComponent,
    AdminComponent,
    GameCreateComponent,
    GameEditComponent,
    UserListComponent,
    CartComponent,
    GamesComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NgxMaskModule.forRoot(
      {dropSpecialCharacters: false}
      ),
    ToastrModule.forRoot({
      timeOut:4000,
      closeButton:true,
      progressBar:true
    }),
  ],
  providers: [AuthInterceptorProvider, {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
    }],
  bootstrap: [AppComponent], 
  
})
export class AppModule { }
