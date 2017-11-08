import { Component, OnInit } from '@angular/core';
import { CategoriasCampanhaService } from './categorias-campanha.service';
import {CategoriasCampanhaModel} from './categorias-campanha.model';

@Component({
  selector: 'mt-categorias-campanha',
  templateUrl: './categorias-campanha.component.html',
  styleUrls: ['./categorias-campanha.component.css']
})
export class CategoriasCampanhaComponent implements OnInit {

  categorias: CategoriasCampanhaModel[];
  constructor(private categoriasCampanhaService: CategoriasCampanhaService) { }

  ngOnInit() {
    this.categoriasCampanhaService.categorias().subscribe(categorias => this.categorias = categorias)
  }

}
