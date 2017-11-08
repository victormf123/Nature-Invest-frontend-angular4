import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecompensasModel } from './recompensa.model';
import { RecompensaService} from './recompensa.service';


@Component({
  selector: 'mt-form-recompensa',
  templateUrl: './form-recompensa.component.html',
  styleUrls: ['./form-recompensa.component.css']
})
export class FormRecompensaComponent implements OnInit {

  @Input() items: RecompensasModel[] ;
  @Output() remove = new EventEmitter<RecompensasModel>();

  constructor(private recompensaService: RecompensaService) { }

  ngOnInit() {
  }

  addImpacto(recompensa: RecompensasModel) {
      this.recompensaService.addItem(recompensa);
  }
  emitRemove(item: RecompensasModel) {
    this.recompensaService.removeItem(item);
  }


}
