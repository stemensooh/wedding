import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeLineDto } from '../dtos/time-line.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = environment.apiUrl + '/timeline';
  }

  get() {
    const url = `${this.urlApi}/`;
    // console.log(url);
    return this.httpCliente.get<TimeLineDto[]>(url);
  }
}
