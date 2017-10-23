var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingCarService) {
        this.shoppingCarService = shoppingCarService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCarService.items;
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCarService.total();
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCarService.clear();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.shoppingCarService.removeItem(item);
    };
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.shoppingCarService.addItem(item);
    };
    ShoppingCartComponent = __decorate([
        Component({
            selector: 'mt-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: ['./shopping-cart.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map