import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConversorComponent } from './paginas/conversor/conversor.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    ListaComponent,
    HistoricoComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
