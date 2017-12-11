import { Component, OnInit } from '@angular/core';
import {DestaqueModel} from '../destaque-top/destaque.model';
import {DestaqueService} from '../destaque-top/destaque.service';

@Component({
  selector: 'mt-destaques-retafinal',
  templateUrl: './destaques-retafinal.component.html',
  styleUrls: ['./destaques-retafinal.component.css']
})
export class DestaquesRetafinalComponent implements OnInit {

  campanhasDestaqueRetaFinal: DestaqueModel[];

  constructor(private destaqueService:  DestaqueService) { }

  ngOnInit() {
    this.destaqueService.getCampanhasRetaFinal().subscribe(destaque => { 
      this.campanhasDestaqueRetaFinal = destaque
    })
  }

}
