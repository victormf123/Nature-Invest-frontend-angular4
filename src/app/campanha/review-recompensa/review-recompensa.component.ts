import { Component, OnInit } from '@angular/core';
import { RecompensasModel } from '../form-recompensa/recompensa.model';
import { RecompensaService} from '../form-recompensa/recompensa.service';

@Component({
  selector: 'mt-review-recompensa',
  templateUrl: './review-recompensa.component.html',
  styleUrls: ['./review-recompensa.component.css']
})
export class ReviewRecompensaComponent implements OnInit {

  recompensas: number[] = [1]
  constructor() { }

  ngOnInit() {
  		console.log(this.recompensas)
  }

}
