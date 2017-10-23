
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

import {Restaurante} from './restaurante/restaurante.model';
import {MEAT_API} from '../app.api';
import {MenuItemModel} from '../restaurante-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantesService {
  constructor(private http: HttpClient) {

  }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`);
  }

  restaurantById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }
  menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
    return this.http.get<MenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
