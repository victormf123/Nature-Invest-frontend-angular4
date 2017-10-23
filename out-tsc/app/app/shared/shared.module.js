var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from '../restaurante-detail/shopping-cart/shopping-cart.service';
import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { OrderService } from '../order/order.service';
import { LoginService } from '../security/login/login.service';
import { LoggedinGuard } from '../security/loggedin.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';
import { AuthInterceptor } from '../security/auth.interceptor';
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [ShoppingCartService, RestaurantesService, OrderService, LoggedinGuard, LeaveOrderGuard, LoginService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        NgModule({
            declarations: [InputComponent, RadioComponent, RatingComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map