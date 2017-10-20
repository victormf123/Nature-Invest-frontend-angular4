import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantesService} from '../../restaurantes/restaurantes.service';

import {Observable} from 'rxjs/Observable';
import {MenuItemModel} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItemModel[]>;
  constructor( private restaurantesService: RestaurantesService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantesService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItemModel) {
    console.log(item);
  }
}
