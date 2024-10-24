import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {
  displayedColumns: string[] = ['data', 'moedaOrigem', 'moedaDestino', 'valor', 'resultado', 'taxa', 'actions'];
  dataSource: any[] = [];

  ngOnInit(): void {
    const historico = JSON.parse(localStorage.getItem('historico') || '[]');
    this.dataSource = historico;
  }

  excluirConversao(index: number): void {
    this.dataSource.splice(index, 1); 
    localStorage.setItem('historico', JSON.stringify(this.dataSource)); 
  
    
    this.dataSource = [...this.dataSource]; 
  }
}
