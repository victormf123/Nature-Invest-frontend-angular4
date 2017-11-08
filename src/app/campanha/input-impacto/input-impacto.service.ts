import {Injectable} from '@angular/core';
import {impactosQuantitativosModel} from '../input-impacto/input-impacto.model';


@Injectable()
export  class InputImpactoService {
  items: impactosQuantitativosModel[] = [];

  ImpactosQuantitativos(): impactosQuantitativosModel[] {
    return this.items;
  }
  clear() {
    this.items = [];
  }

  removeItem(item: impactosQuantitativosModel) {
    if (item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
  addItem(item: impactosQuantitativosModel) {
    this.items.push(item);
  }
}
