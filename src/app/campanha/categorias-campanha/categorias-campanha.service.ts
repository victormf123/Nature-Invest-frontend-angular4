import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CategoriasCampanhaModel} from './categorias-campanha.model';
import {MEAT_OAPI} from '../../app.api';


@Injectable()
export class CategoriasCampanhaService {
  constructor(private http: HttpClient) {

  }
  categorias(): Observable<CategoriasCampanhaModel[]> {
    return this.http.get<CategoriasCampanhaModel[]>(`${MEAT_OAPI}/getCategorias`);
  }
}
