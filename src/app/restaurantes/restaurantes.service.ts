
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

import {Restaurante} from './restaurante/restaurante.model';
import {MEAT_API} from '../app.api';
import {AppErrorHandler} from '../app.error-handler';
import {MenuItemModel} from '../restaurante-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantesService {
  constructor(private http: Http) {

  }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(AppErrorHandler.handlerError);
  }

  restaurantById(id: string): Observable<Restaurante> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(AppErrorHandler.handlerError);
  }

  reviewsOfRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(AppErrorHandler.handlerError);
  }
  menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(AppErrorHandler.handlerError);
  }
}
