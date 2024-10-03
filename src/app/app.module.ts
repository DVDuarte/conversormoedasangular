import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConversorComponent } from './paginas/conversor/conversor.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { HistoricoComponent } from './paginas/historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    ListaComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
