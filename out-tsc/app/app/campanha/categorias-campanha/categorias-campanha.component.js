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
import { CategoriasCampanhaService } from './categorias-campanha.service';
var CategoriasCampanhaComponent = (function () {
    function CategoriasCampanhaComponent(categoriasCampanhaService) {
        this.categoriasCampanhaService = categoriasCampanhaService;
    }
    CategoriasCampanhaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriasCampanhaService.categorias().subscribe(function (categorias) { return _this.categorias = categorias; });
    };
    CategoriasCampanhaComponent = __decorate([
        Component({
            selector: 'mt-categorias-campanha',
            templateUrl: './categorias-campanha.component.html',
            styleUrls: ['./categorias-campanha.component.css']
        }),
        __metadata("design:paramtypes", [CategoriasCampanhaService])
    ], CategoriasCampanhaComponent);
    return CategoriasCampanhaComponent;
}());
export { CategoriasCampanhaComponent };
//# sourceMappingURL=categorias-campanha.component.js.map