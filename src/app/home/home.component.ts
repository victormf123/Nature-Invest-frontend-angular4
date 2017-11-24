import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CategoriasCampanhaService } from '../campanha/categorias-campanha/categorias-campanha.service';
import {CategoriasCampanhaModel} from '../campanha/categorias-campanha/categorias-campanha.model';
@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = [
    '../assets/img/slider-1.jpg',
    '../assets/img/slider-2.jpg',
    '../assets/img/slider-3.jpg'
 ];
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };
  categorias: CategoriasCampanhaModel[];
  constructor(private categoriasCampanhaService: CategoriasCampanhaService) { }

  ngOnInit( ) {
    this.categoriasCampanhaService.categorias().subscribe(categorias => this.categorias = categorias)
  }

}
