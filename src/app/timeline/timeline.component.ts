import { AfterContentInit, AfterViewInit, Component, Input } from '@angular/core';
import { ParametroDto } from '../core/dtos/parametro.dto';
import { ParametrosService } from '../core/services/parametros.service';
import { TimeLineService } from '../core/services/time-line.service';
import {
  TimelineDto,
  WeddingResponseDto,
} from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements AfterContentInit {
  @Input() wedding!: WeddingResponseDto;

  timelines!: TimelineDto[];

  constructor() {
    
  }

  ngAfterContentInit(): void {
    this.timelines = this.wedding?.timelines;
  }


}
