import {Injectable} from '@angular/core';
import {RecompensasModel} from './recompensa.model';


@Injectable()
export  class RecompensaService {
  items: RecompensasModel[] = [];
  bool: boolean;

  Recompensa(): RecompensasModel[] {
    return this.items;
  }
  getBool(): boolean {
    return this.bool
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
