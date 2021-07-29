import { Component, OnInit } from '@angular/core';

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
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase) }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      
      alert('Frase correta, parabéns!!!')
      
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      this.rodadaFrase = this.frases[this.rodada]
      
    } else {
      alert('Tradução incorreta! Tente novamente.')
      this.tentativas--
      
      if(this.tentativas===-1){
        alert('Game Over!!! Tente novamente')
        this.rodada = 0
        this.progresso = 0
        this.tentativas = 3
      }
    }
      this.resposta=""
  }

}