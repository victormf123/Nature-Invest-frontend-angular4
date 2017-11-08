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
import { EquipeService } from './equipe.service';
var FormEquipeComponent = (function () {
    function FormEquipeComponent(equipeService) {
        this.equipeService = equipeService;
        this.remove = new EventEmitter();
    }
    FormEquipeComponent.prototype.ngOnInit = function () {
    };
    FormEquipeComponent.prototype.addEquipe = function (equipe) {
        if (equipe.nome !== '' && equipe.email !== '') {
            this.equipeService.addItem(equipe);
        }
    };
    FormEquipeComponent.prototype.emitRemove = function (item) {
        this.equipeService.removeItem(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FormEquipeComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormEquipeComponent.prototype, "remove", void 0);
    FormEquipeComponent = __decorate([
        Component({
            selector: 'mt-form-equipe',
            templateUrl: './form-equipe.component.html',
            styleUrls: ['./form-equipe.component.css']
        }),
        __metadata("design:paramtypes", [EquipeService])
    ], FormEquipeComponent);
    return FormEquipeComponent;
}());
export { FormEquipeComponent };
//# sourceMappingURL=form-equipe.component.js.map