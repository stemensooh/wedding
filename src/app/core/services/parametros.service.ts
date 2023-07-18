import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ParametroDto } from '../dtos/parametro.dto';

const URI_API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = URI_API + '/parametro';
  }

  get(codigo: string) {
    const url = `${this.urlApi}/${codigo}`;
    console.log(url);
    return this.httpCliente.get<ParametroDto[]>(url);
  }
}
