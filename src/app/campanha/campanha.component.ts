import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CategoriasCampanhaService } from './categorias-campanha/categorias-campanha.service';
import { CategoriasCampanhaModel } from './categorias-campanha/categorias-campanha.model';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { InputImpactoService } from './input-impacto/input-impacto.service';
import {impactosQuantitativosModel} from './input-impacto/input-impacto.model';
import { EquipeModel } from './form-equipe/equipe.model';
import { EquipeService } from './form-equipe/equipe.service';
import { RecompensasModel } from './form-recompensa/recompensa.model';
import { RecompensaService } from './form-recompensa/recompensa.service';
import 'rxjs/add/operator/do';
const URL = '';




@Component({
  selector: 'mt-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.css']
})
export class CampanhaComponent implements OnInit {

  campanhaForm: FormGroup
  numberPattern = /^[0-9]*$/;
  categorias: CategoriasCampanhaModel[];

  constructor(
              private categoriasCampanhaService: CategoriasCampanhaService,
              private router: Router,
              private formBiulder: FormBuilder,
              private inputImpactoService: InputImpactoService,
              private equipeService: EquipeService,
              private  recompensaService: RecompensaService) { }

  inpactosQuatitativos(): impactosQuantitativosModel[] {
    return this.inputImpactoService.ImpactosQuantitativos();
  }
  recompensas(): RecompensasModel[] {
    return this.recompensaService.Recompensa();
  }
  equipe(): EquipeModel[] {
    return this.equipeService.equipe();
  }
  remove(item: impactosQuantitativosModel) {
    this.inputImpactoService.removeItem(item);
  }

  ngOnInit() {
   this.categoriasCampanhaService.categorias().subscribe(categorias => this.categorias = categorias);
   this.campanhaForm = this.formBiulder.group({
     titulo: this.formBiulder.control('', null),
     orcamento: this.formBiulder.control('', [ Validators.required,  Validators.pattern(this.numberPattern)]),
     moeda: this.formBiulder.control('', [Validators.required]),
     estado: this.formBiulder.control('', [Validators.required]),
     endereco: this.formBiulder.control('', [ Validators.minLength(5)]),
     cep: this.formBiulder.control('', [Validators.required]),
     telefone: this.formBiulder.control('', [Validators.pattern(this.numberPattern)]),
     link_youtube: this.formBiulder.control('', null),
     descricao_projeto: this.formBiulder.control('', null),
     categoria: this.formBiulder.control('', null)
    });
  }


  enviarForm(campanha: any) {
    console.log(campanha);
  }

}
