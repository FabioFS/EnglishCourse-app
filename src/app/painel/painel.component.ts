import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      
      alert('Frase correta, parabéns!!!')
      
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4) {
         alert('Parabéns! Você Ganhou!')
         this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()
      
    } else {
      alert('Tradução incorreta! Tente novamente.')
      this.tentativas--
      
      if(this.tentativas === -1){
        alert('Game Over!!! Tente novamente')
        this.rodada = 0
        this.progresso = 0
        this.tentativas = 3
        this.encerrarJogo.emit('derrota')
      }
    }
      this.resposta=""
  }

}
