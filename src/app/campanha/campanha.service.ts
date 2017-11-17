import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter'
import {MEAT_OAPI, MEAT_PRIVATE_API} from '../app.api';
import {CampanhaModel} from './campanha.model';


@Injectable()
export  class CampanhaService {

  constructor(private http: HttpClient) {}

  inserirCampanha(campanha: any): Observable<CampanhaModel> {
    return this.http.post<CampanhaModel>(`http://localhost:3003/api/campanha`, campanha )
      .map(item =>  item);
  }
}
