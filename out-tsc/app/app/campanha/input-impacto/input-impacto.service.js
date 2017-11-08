var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var InputImpactoService = (function () {
    function InputImpactoService() {
        this.items = [];
    }
    InputImpactoService.prototype.ImpactosQuantitativos = function () {
        return this.items;
    };
    InputImpactoService.prototype.clear = function () {
        this.items = [];
    };
    InputImpactoService.prototype.removeItem = function (item) {
        if (item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    };
    InputImpactoService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    InputImpactoService = __decorate([
        Injectable()
    ], InputImpactoService);
    return InputImpactoService;
}());
export { InputImpactoService };
//# sourceMappingURL=input-impacto.service.js.map