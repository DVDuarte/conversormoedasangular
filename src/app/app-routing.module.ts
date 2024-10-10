import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './paginas/conversor/conversor.component';
import { HomeComponent } from './paginas/home/home.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'conversor', component: ConversorComponent},
  { path: 'historico', component: HistoricoComponent},
  { path: 'lista', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
