import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {CartItemModel} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from './order.model';
import {MEAT_API} from '../app.api';


@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

  cartItems(): CartItemModel[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItemModel) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItemModel) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                          .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}
