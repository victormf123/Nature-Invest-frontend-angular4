import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter'
import {MEAT_OAPI, MEAT_PRIVATE_API} from '../../app.api';
import {DestaqueModel} from './destaque.model';


@Injectable()
export  class DestaqueService {

  constructor(private http: HttpClient) {}

  campanhaDestaque(): Observable<DestaqueModel[]> {
    return this.http.get<DestaqueModel[]>(`${MEAT_OAPI}/destaqueTop`);
  }
}
