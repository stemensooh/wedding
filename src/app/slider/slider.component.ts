import { Component } from '@angular/core';
import { ParametroDto } from '../core/dtos/parametro.dto';
import { ParametrosService } from '../core/services/parametros.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  nombresNovios: ParametroDto = new ParametroDto();

  constructor(private parametroService: ParametrosService){
    this.parametroService.get('NOMBRES_NOVIOS').subscribe((data: ParametroDto[]) => {
      console.log(data);
      if (data.length > 0) {
        this.nombresNovios = data[0];
      }
    });
  }

}
