import { Component, OnInit } from '@angular/core';
import { MoedasService } from '../../services/moedas.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  moedas: string[] = [];
  moedaOrigem!: string;
  moedaDestino!: string;
  valor: number = 0;
  resultado!: number;

  constructor(private moedasService: MoedasService) { }

  ngOnInit(): void {
    this.moedasService.listarMoedas().subscribe(data => {
      this.moedas = Object.keys(data.conversion_rates);
    });
  }

  converter(): void {
    if (this.moedaOrigem && this.moedaDestino && this.valor > 0) {
      this.moedasService.listarMoedas().subscribe(data => {
        const taxaOrigem = data.conversion_rates[this.moedaOrigem];
        const taxaDestino = data.conversion_rates[this.moedaDestino];
  
        if (taxaOrigem && taxaDestino) {
          this.resultado = (this.valor / taxaOrigem) * taxaDestino;
  
          const conversao = {
            data: new Date(),
            moedaOrigem: this.moedaOrigem,
            moedaDestino: this.moedaDestino,
            valor: this.valor,
            resultado: this.resultado,
            taxa: (taxaDestino / taxaOrigem)
          };
  
          let historico = JSON.parse(localStorage.getItem('historico') || '[]');
          historico.push(conversao);
          localStorage.setItem('historico', JSON.stringify(historico));
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
  
}
