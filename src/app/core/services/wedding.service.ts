import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeddingDto } from '../dtos/wedding.dto';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = environment.apiUrl + '/wedding';
  }

  getAll() {
    const url = `${this.urlApi}/`;
    return this.httpCliente.get<WeddingDto[]>(url);
  }

  
  getId(id: string) {
    const url = `${this.urlApi}/${id}`;
    return this.httpCliente.get<WeddingDto>(url);
  }

}
