import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputImpactoService } from './input-impacto.service';
import {impactosQuantitativosModel} from './input-impacto.model';




@Component({
  selector: 'mt-input-impacto',
  templateUrl: './input-impacto.component.html',
  styleUrls: ['./input-impacto.component.css']
})
export class InputImpactoComponent implements OnInit {

  @Input() items: impactosQuantitativosModel[] ;
  @Output() remove = new EventEmitter<impactosQuantitativosModel>();

  constructor(private inputImpactoService: InputImpactoService) { }

  ngOnInit() {
  }

  addImpacto(impacto: impactosQuantitativosModel) {
    if ( impacto.quantidade > 0 && impacto.descricao !== '' ) {
      this.inputImpactoService.addItem(impacto);
    }

}
  emitRemove(item: impactosQuantitativosModel) {
     this.inputImpactoService.removeItem(item);
  }

}
