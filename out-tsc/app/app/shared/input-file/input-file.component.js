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
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
var InputFileComponent = (function () {
    function InputFileComponent() {
        this.uploader = new FileUploader({ url: 'http:/localhost:8003/upload' });
    }
    InputFileComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    InputFileComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    InputFileComponent.prototype.ngOnInit = function () {
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    };
    InputFileComponent = __decorate([
        Component({
            selector: 'mt-input-file',
            templateUrl: './input-file.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], InputFileComponent);
    return InputFileComponent;
}());
export { InputFileComponent };
//# sourceMappingURL=input-file.component.js.map