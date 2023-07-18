import { Component, OnInit } from '@angular/core';
import { ParametrosService } from '../core/services/parametros.service';
import { ParametroDto } from '../core/dtos/parametro.dto';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datosNovia: ParametroDto = new ParametroDto();
  datosNovio: ParametroDto = new ParametroDto();

  constructor(private parametroService: ParametrosService){
    this.parametroService.get('NOMBRES_NOVIA').subscribe((data: ParametroDto[]) => {
      console.log(data);
      if (data.length > 0) {
        this.datosNovia = data[0];
      }
    });

    this.parametroService.get('NOMBRES_NOVIO').subscribe((data: ParametroDto[]) => {
      console.log(data);
      if (data.length > 0) {
        this.datosNovio = data[0];
      }
    })
  }

  ngOnInit(): void {


  }


}
