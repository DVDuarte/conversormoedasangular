import { Component, OnInit } from '@angular/core';
import { MoedasService } from '../../services/moedas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  moedas: any[] = []; 

  constructor(private moedasService: MoedasService) { }

  ngOnInit(): void {
    this.loadMoedas(); 
  }

  loadMoedas(): void {
    this.moedasService.getMoedas().subscribe(data => {
      this.moedas = Object.entries(data.rates).map(([key, value]) => ({ symbol: key, rate: value }));
      console.log(this.moedas); 
    }, error => {
      console.error('Erro ao carregar moedas:', error);
    });
  }
}
