import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {CartItemModel} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Order} from './order.model';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) {}

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
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`,
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
                          .map(response => response.json())
                          .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}
