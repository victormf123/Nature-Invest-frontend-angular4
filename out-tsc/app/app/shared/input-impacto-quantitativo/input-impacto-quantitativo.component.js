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
var InputImpactoQuantitativoComponent = (function () {
    function InputImpactoQuantitativoComponent() {
        this.impactos_quantitativos = [{ descricao: '', quantidade: null }];
    }
    InputImpactoQuantitativoComponent.prototype.ngOnInit = function () {
    };
    InputImpactoQuantitativoComponent.prototype.addImpacto = function (impacto) {
        this.impactos_quantitativos.push(impacto);
    };
    InputImpactoQuantitativoComponent = __decorate([
        Component({
            selector: 'mt-input-impacto-quantitativo',
            templateUrl: './input-impacto-quantitativo.component.html',
            styleUrls: ['./input-impacto-quantitativo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], InputImpactoQuantitativoComponent);
    return InputImpactoQuantitativoComponent;
}());
export { InputImpactoQuantitativoComponent };
//# sourceMappingURL=input-impacto-quantitativo.component.js.map