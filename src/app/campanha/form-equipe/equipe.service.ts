import {Injectable} from '@angular/core';
import {EquipeModel} from './equipe.model';

@Injectable()
export  class EquipeService {
  items: EquipeModel[] = [];

  equipe(): EquipeModel[] {
    return this.items;
  }
  clear() {
    this.items = [];
  }

  removeItem(item: EquipeModel) {
    if (item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
  addItem(item: EquipeModel) {
    this.items.push(item);
  }
}
