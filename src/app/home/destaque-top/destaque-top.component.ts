import { Component, OnInit } from '@angular/core';
import {DestaqueModel} from './destaque.model';
import {DestaqueService} from './destaque.service';

@Component({
  selector: 'mt-destaque-top',
  templateUrl: './destaque-top.component.html',
  styleUrls: ['./destaque-top.component.css']
})
export class DestaqueTopComponent implements OnInit {

  campanhasDestaque: DestaqueModel[];

  array1: DestaqueModel[] = [];
  array2: DestaqueModel[] =  [];

  constructor(private destaqueService:  DestaqueService) { }

  ngOnInit() {
    this.destaqueService.campanhaDestaque().subscribe(destaque => { this.campanhasDestaque = destaque
        for (var i = 0; i < this.campanhasDestaque.length; i++) {
          //console.log(this.campanhasDestaque.length)
          if(i <= 2 ){
            //console.log(this.campanhasDestaque[i])
            this.array1.push(this.campanhasDestaque[i]);
            //console.log(this.array1)
          }else if ( i >= 3 && i <= 5){
            //console.log(this.campanhasDestaque[i])
            this.array2.push(this.campanhasDestaque[i]);

            //console.log(this.array2)
            
          }      
        }
      })
  }
  

  

}
