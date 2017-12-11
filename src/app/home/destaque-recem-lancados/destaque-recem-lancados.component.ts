import { Component, OnInit } from '@angular/core';
import {DestaqueModel} from '../destaque-top/destaque.model';
import {DestaqueService} from '../destaque-top/destaque.service';
@Component({
  selector: 'mt-destaque-recem-lancados',
  templateUrl: './destaque-recem-lancados.component.html',
  styleUrls: ['./destaque-recem-lancados.component.css']
})
export class DestaqueRecemLancadosComponent implements OnInit {

  campanhasDestaqueRecemlancado: DestaqueModel[];
  constructor(private destaqueService:  DestaqueService) { }

  ngOnInit() {
    this.destaqueService.getCampanhasCampanhasRecemLancados().subscribe(destaque => { 
      this.campanhasDestaqueRecemlancado = destaque
    })
  }

}
