import {Injectable} from '@angular/core';
import {RecompensasModel} from './recompensa.model';


@Injectable()
export  class RecompensaService {
  items: RecompensasModel[] = [];

  Recompensa(): RecompensasModel[] {
    return this.items;
  }
  clear() {
    this.items = [];
  }

  removeItem(item: RecompensasModel) {
    if (item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
  addItem(item: RecompensasModel) {
    this.items.push(item);
  }
}
