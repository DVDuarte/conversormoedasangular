import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConversorComponent } from './paginas/conversor/conversor.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabelaComponent } from './componentes/tabela/tabela.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    ListaComponent,
    HistoricoComponent,
    TopoComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
