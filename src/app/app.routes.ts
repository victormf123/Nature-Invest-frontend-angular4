import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestauranteDetailComponent} from './restaurante-detail/restaurante-detail.component';
import {MenuComponent} from './restaurante-detail/menu/menu.component';
import {ReviewsComponent} from './restaurante-detail/reviews/reviews.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import {LoggedinGuard} from './security/loggedin.guard';
import {CampanhaComponent} from './campanha/campanha.component';
import { SingleViewComponent } from './single-view/single-view.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'single-view', component: SingleViewComponent },
  { path: 'login/:to', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'restaurantes/:id', component: RestauranteDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent},
      { path: 'reviews', component: ReviewsComponent}
    ]},
  { path: 'campanha', loadChildren: './campanha/campanha.module#CampanhaModule', canLoad: [LoggedinGuard], canActivate: [LoggedinGuard] },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'order-summary', component: OrderSummaryComponent},
  { path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedinGuard], canActivate: [LoggedinGuard]},
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', component: NotFoundComponent }
];
