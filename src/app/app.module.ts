import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConversorComponent } from './paginas/conversor/conversor.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { HistoricoComponent } from './paginas/historico/historico.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import { provideHttpClient } from '@angular/common/http';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    ListaComponent,
    HistoricoComponent,
    TopoComponent,
    TabelaComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
