import {Injectable} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export  class DatapickerRangeService {

  dataInicial: NgbDateStruct;
  dataFinal: NgbDateStruct;

  getDataInicial(fromDate: NgbDateStruct): NgbDateStruct {
    return this.dataInicial = fromDate;
  }

  getDataFinal(toDate: NgbDateStruct): NgbDateStruct {
    return this.dataFinal = toDate;
  }
}
