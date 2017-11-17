import { Component, OnInit, Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { CampanhaService} from './campanha.service';
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
import { DatapickerRangeService } from '../shared/datapicker-range/datapicker-range.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/do';
import { IMAGE_SAVE } from '../app.api';
import {CampanhaModel} from './campanha.model';
import { LoginService } from '../security/login/login.service';

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
  uploader = new FileUploader({ url: `http://localhost:8003/api/upload`});

  constructor(
              private categoriasCampanhaService: CategoriasCampanhaService,
              private router: Router,
              private formBiulder: FormBuilder,
              private inputImpactoService: InputImpactoService,
              private equipeService: EquipeService,
              private recompensaService: RecompensaService,
              private campanhaService: CampanhaService,
              private datapickerRangeService: DatapickerRangeService,
              private loginService: LoginService ) {

               }

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
  getDataInicial(): NgbDateStruct {
    return this.datapickerRangeService.dataInicial;
  }
  getDataFinal(): NgbDateStruct {
    return this.datapickerRangeService.dataFinal;
  }

  uploadFile(file) {
    console.log(file)
    this.uploader.
    this.uploader.uploadItem(file)
  }


  ngOnInit() {
   this.categoriasCampanhaService.categorias().subscribe(categorias => this.categorias = categorias);
   this.campanhaForm = this.formBiulder.group({
     titulo: this.formBiulder.control('', [Validators.required]),
     orcamento: this.formBiulder.control('', [ Validators.required,  Validators.pattern(this.numberPattern)]),
     moeda: this.formBiulder.control('', [Validators.required]),
     estado: this.formBiulder.control('', [Validators.required]),
     endereco: this.formBiulder.control('', [ Validators.required, Validators.minLength(5)]),
     cep: this.formBiulder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
     telefone: this.formBiulder.control('', [ Validators.required, Validators.pattern(this.numberPattern) ]),
     link_youtube: this.formBiulder.control('', null),
     descricao_projeto: this.formBiulder.control('', null),
     categoria: this.formBiulder.control('', null),
     boolRecompensa: this.formBiulder.control('', null)
    });
  }


  enviarForm() {
    
    console.log(this.uploader)

    /*let campanha = {
      titulo: this.campanhaForm.value.titulo,
      orcamento: this.campanhaForm.value.orcamento,
      moeda: this.campanhaForm.value.moeda,
      status: 'EM ANALISE',
      imagem: `${IMAGE_SAVE}/${this.uploader.queue[0].file.name}`,
      estado: this.campanhaForm.value.estado,
      endereco: this.campanhaForm.value.endereco,
      cep: this.campanhaForm.value.cep,
      telefone: this.campanhaForm.value.telefone,
      dataInicial: `${this.getDataInicial().day}/${this.getDataInicial().month}/${this.getDataInicial().year}`,
      dataFinal: `${this.getDataFinal().day}/${this.getDataFinal().month}/${this.getDataFinal().year}`,
      link_youtube: this.campanhaForm.value.link_youtube,
      descricao_projeto: this.campanhaForm.value.descricao_projeto,
      boolRecompensa: this.campanhaForm.value.boolRecompensa,
      usuario: { name: this.loginService.user.name, email: this.loginService.user.email },
      categoria: this.campanhaForm.value.categoria,
      equipe: this.equipe() ,
      recompensas: this.recompensas(),
      impactos_quantitativos: this.inpactosQuatitativos()
    }
    
    this.campanhaService.inserirCampanha(campanha).subscribe(response => {
      console.log('Campanha:', response)
    });*/
  }
}
