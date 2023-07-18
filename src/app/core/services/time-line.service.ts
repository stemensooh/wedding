import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeLineDto } from '../dtos/time-line.dto';

const URI_API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = URI_API + '/timeline';
  }

  get() {
    const url = `${this.urlApi}/`;
    console.log(url);
    return this.httpCliente.get<TimeLineDto[]>(url);
  }
}
