import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ParametroDto } from '../dtos/parametro.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = environment.apiUrl + '/parametro';
  }

  get(codigo: string) {
    const url = `${this.urlApi}/${codigo}`;
    // console.log(url);
    return this.httpCliente.get<ParametroDto[]>(url);
  }
}
