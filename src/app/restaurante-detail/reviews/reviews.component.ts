import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantesService} from '../../restaurantes/restaurantes.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantesService: RestaurantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantesService.reviewsOfRestaurante(this.route.parent.snapshot.params['id']);
  }

}
