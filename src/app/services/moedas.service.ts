import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IMoedasResponse } from '../componentes/tabela/tabela.component';

@Injectable({
  providedIn: 'root'
})

export class MoedasService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + environment.apiKey
      })
    };
  }

  listarMoedas(): Observable<IMoedasResponse> {
    let url = environment.api_url;
    const options = this.getHeaders();

    return this.http.get<any>(environment.api_url);
  }

}
