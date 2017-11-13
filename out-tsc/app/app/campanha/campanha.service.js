var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { MEAT_PRIVATE_API } from '../app.api';
import { LoginService } from '../security/login/login.service';
var CampanhaService = (function () {
    function CampanhaService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    CampanhaService.prototype.inserirCampanha = function (campanha) {
        var headers = new HttpHeaders();
        if (this.loginService.isLoogedIn()) {
            headers = headers.set('Authorization', "Bearer " + this.loginService.user.token);
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post(MEAT_PRIVATE_API + "/campanha", JSON.stringify(campanha), { headers: headers })
            .map(function (item) { return item._id; });
    };
    CampanhaService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, LoginService])
    ], CampanhaService);
    return CampanhaService;
}());
export { CampanhaService };
//# sourceMappingURL=campanha.service.js.map