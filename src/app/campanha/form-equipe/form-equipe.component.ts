import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipeModel } from './equipe.model';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'mt-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {

  @Input() items: EquipeModel[];
  @Output() remove = new EventEmitter<EquipeModel>();

  constructor(private equipeService: EquipeService) { }



  ngOnInit() {
  }

  addEquipe(equipe: EquipeModel) {
    if ( equipe.nome !== '' && equipe.email !== '' ) {
      this.equipeService.addItem(equipe);
    }
  }
  emitRemove(item: EquipeModel) {
    this.equipeService.removeItem(item);
  }

}
