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
import { FileUploader } from 'ng2-file-upload';
import { CampanhaService } from './campanha.service';
import { CategoriasCampanhaService } from './categorias-campanha/categorias-campanha.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { InputImpactoService } from './input-impacto/input-impacto.service';
import { EquipeService } from './form-equipe/equipe.service';
import { RecompensaService } from './form-recompensa/recompensa.service';
import { DatapickerRangeService } from '../shared/datapicker-range/datapicker-range.service';
import 'rxjs/add/operator/do';
import { IMAGE_SAVE } from '../app.api';
import { LoginService } from '../security/login/login.service';
var URL = '';
var CampanhaComponent = (function () {
    function CampanhaComponent(categoriasCampanhaService, router, formBiulder, inputImpactoService, equipeService, recompensaService, campanhaService, datapickerRangeService, loginService) {
        this.categoriasCampanhaService = categoriasCampanhaService;
        this.router = router;
        this.formBiulder = formBiulder;
        this.inputImpactoService = inputImpactoService;
        this.equipeService = equipeService;
        this.recompensaService = recompensaService;
        this.campanhaService = campanhaService;
        this.datapickerRangeService = datapickerRangeService;
        this.loginService = loginService;
        this.numberPattern = /^[0-9]*$/;
        this.uploader = new FileUploader({ url: "http://localhost:8003/api/upload" });
    }
    CampanhaComponent.prototype.inpactosQuatitativos = function () {
        return this.inputImpactoService.ImpactosQuantitativos();
    };
    CampanhaComponent.prototype.recompensas = function () {
        return this.recompensaService.Recompensa();
    };
    CampanhaComponent.prototype.equipe = function () {
        return this.equipeService.equipe();
    };
    CampanhaComponent.prototype.remove = function (item) {
        this.inputImpactoService.removeItem(item);
    };
    CampanhaComponent.prototype.getDataInicial = function () {
        return this.datapickerRangeService.dataInicial;
    };
    CampanhaComponent.prototype.getDataFinal = function () {
        return this.datapickerRangeService.dataFinal;
    };
    CampanhaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriasCampanhaService.categorias().subscribe(function (categorias) { return _this.categorias = categorias; });
        this.campanhaForm = this.formBiulder.group({
            titulo: this.formBiulder.control('', null),
            orcamento: this.formBiulder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
            moeda: this.formBiulder.control('', [Validators.required]),
            estado: this.formBiulder.control('', [Validators.required]),
            endereco: this.formBiulder.control('', [Validators.minLength(5)]),
            cep: this.formBiulder.control('', [Validators.required]),
            telefone: this.formBiulder.control('', [Validators.pattern(this.numberPattern)]),
            link_youtube: this.formBiulder.control('', null),
            descricao_projeto: this.formBiulder.control('', null),
            categoria: this.formBiulder.control('', null)
        });
    };
    CampanhaComponent.prototype.enviarForm = function () {
        var campanha = {
            titulo: this.campanhaForm.value.titulo,
            orcamento: this.campanhaForm.value.orcamento,
            imagem: IMAGE_SAVE + "/" + this.uploader.queue[0].file.name,
            estado: this.campanhaForm.value.estado,
            endereco: this.campanhaForm.value.endereco,
            cep: this.campanhaForm.value.cep,
            telefone: this.campanhaForm.value.telefone,
            dataInicial: this.getDataInicial().day + "/" + this.getDataInicial().month + "/" + this.getDataInicial().year,
            dataFinal: this.getDataFinal().day + "/" + this.getDataFinal().month + "/" + this.getDataFinal().year,
            link_youtube: this.campanhaForm.value.link_youtube,
            descricao_projecto: this.campanhaForm.value.descricao_projeto,
            usuario: { nome: this.loginService.user.name, email: this.loginService.user.email },
            categoria: this.campanhaForm.value.categoria,
            equipe: this.equipe(),
            recompensas: this.recompensas(),
            impactos_quantitativos: this.inpactosQuatitativos()
        };
        this.campanhaService.inserirCampanha(campanha).subscribe(function (response) {
            console.log('Campanha:', response);
        });
    };
    CampanhaComponent = __decorate([
        Component({
            selector: 'mt-campanha',
            templateUrl: './campanha.component.html',
            styleUrls: ['./campanha.component.css']
        }),
        __metadata("design:paramtypes", [CategoriasCampanhaService,
            Router,
            FormBuilder,
            InputImpactoService,
            EquipeService,
            RecompensaService,
            CampanhaService,
            DatapickerRangeService,
            LoginService])
    ], CampanhaComponent);
    return CampanhaComponent;
}());
export { CampanhaComponent };
//# sourceMappingURL=campanha.component.js.map