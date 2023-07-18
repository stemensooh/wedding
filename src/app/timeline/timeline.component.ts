import { Component } from '@angular/core';
import { ParametroDto } from '../core/dtos/parametro.dto';
import { ParametrosService } from '../core/services/parametros.service';
import { TimeLineService } from '../core/services/time-line.service';
import { TimeLineDto } from '../core/dtos/time-line.dto';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  resumenAmor: ParametroDto = new ParametroDto();
  timelines: TimeLineDto[] = [];

  constructor(
    private parametroService: ParametrosService,
    private timeLineService: TimeLineService
  ) {
    this.parametroService
      .get('RESUMEN_HISTORIA_AMOR')
      .subscribe((data: ParametroDto[]) => {
        console.log(data);
        if (data.length > 0) {
          this.resumenAmor = data[0];
        }
      });

    this.timeLineService
      .get()
      .subscribe((data: TimeLineDto[]) => {
        console.log(data);

        this.timelines = data;
      });
  }
}
