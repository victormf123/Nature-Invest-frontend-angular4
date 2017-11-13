var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputImpactoService } from './campanha/input-impacto/input-impacto.service';
import { CategoriasCampanhaService } from './campanha/categorias-campanha/categorias-campanha.service';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { CategoriasCampanhaComponent } from './campanha/categorias-campanha/categorias-campanha.component';
import { InputImpactoComponent } from './campanha/input-impacto/input-impacto.component';
import { FormRecompensaComponent } from './campanha/form-recompensa/form-recompensa.component';
import { FormEquipeComponent } from './campanha/form-equipe/form-equipe.component';
import { EquipeService } from './campanha/form-equipe/equipe.service';
import { RecompensaService } from './campanha/form-recompensa/recompensa.service';
import { CampanhaService } from './campanha/campanha.service';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { ImagePreviewComponent } from './campanha/image-preview.directive';
import { DatapickerRangeService } from './shared/datapicker-range/datapicker-range.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                FileDropDirective,
                FileSelectDirective,
                AppComponent,
                ImagePreviewComponent,
                HeaderComponent,
                HomeComponent,
                RestaurantesComponent,
                RestauranteComponent,
                RestauranteDetailComponent,
                ShoppingCartComponent,
                MenuComponent,
                MenuItemComponent,
                ReviewsComponent,
                OrderSummaryComponent,
                NotFoundComponent,
                LoginComponent,
                UserDetailComponent,
                CampanhaComponent,
                CategoriasCampanhaComponent,
                InputImpactoComponent,
                FormRecompensaComponent,
                FormEquipeComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                HttpClientModule,
                ImageUploadModule.forRoot(),
                NgbModule.forRoot(),
                SharedModule.forRoot(),
                RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
            ],
            providers: [CampanhaService, DatapickerRangeService, EquipeService, RecompensaService, InputImpactoService, CategoriasCampanhaService, { provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: 'pt-BR' }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map