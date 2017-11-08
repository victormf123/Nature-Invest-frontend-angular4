var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var EquipeService = (function () {
    function EquipeService() {
        this.items = [];
    }
    EquipeService.prototype.equipe = function () {
        return this.items;
    };
    EquipeService.prototype.clear = function () {
        this.items = [];
    };
    EquipeService.prototype.removeItem = function (item) {
        if (item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    };
    EquipeService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    EquipeService = __decorate([
        Injectable()
    ], EquipeService);
    return EquipeService;
}());
export { EquipeService };
//# sourceMappingURL=equipe.service.js.map