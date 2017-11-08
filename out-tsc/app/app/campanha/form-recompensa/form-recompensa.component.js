var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecompensaService } from './recompensa.service';
var FormRecompensaComponent = (function () {
    function FormRecompensaComponent(recompensaService) {
        this.recompensaService = recompensaService;
        this.remove = new EventEmitter();
    }
    FormRecompensaComponent.prototype.ngOnInit = function () {
    };
    FormRecompensaComponent.prototype.addImpacto = function (recompensa) {
        this.recompensaService.addItem(recompensa);
    };
    FormRecompensaComponent.prototype.emitRemove = function (item) {
        this.recompensaService.removeItem(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FormRecompensaComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormRecompensaComponent.prototype, "remove", void 0);
    FormRecompensaComponent = __decorate([
        Component({
            selector: 'mt-form-recompensa',
            templateUrl: './form-recompensa.component.html',
            styleUrls: ['./form-recompensa.component.css']
        }),
        __metadata("design:paramtypes", [RecompensaService])
    ], FormRecompensaComponent);
    return FormRecompensaComponent;
}());
export { FormRecompensaComponent };
//# sourceMappingURL=form-recompensa.component.js.map