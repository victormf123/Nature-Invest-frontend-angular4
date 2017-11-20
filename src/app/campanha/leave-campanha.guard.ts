

import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CampanhaComponent} from './campanha.component';

export class LeaveCampanhaGuard implements CanDeactivate<CampanhaComponent> {


  canDeactivate(campanhaComponent: CampanhaComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerStateSnapshot: RouterStateSnapshot): boolean {
                console.log('Entrou leave Quard');
                return true;
   /*if (!CampanhaComponent) {
      return window.confirm('Deseja desistir da compra?')
    }else {
      return true;
    }*/
  }
}
