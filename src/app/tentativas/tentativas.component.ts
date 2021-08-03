import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  @Input() public tentativas: number = 0 

  constructor() { console.log(this.coracoes)}

  ngOnInit(): void {
   
  }
  
  ngOnChanges(): void {

    if(this.tentativas !== this.coracoes.length){

      let indice =  this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }

  }

}
