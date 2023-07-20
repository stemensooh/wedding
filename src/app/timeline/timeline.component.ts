import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  TimelineDto,
  WeddingResponseDto,
} from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnChanges {
  @Input() wedding!: WeddingResponseDto;

  timelines: TimelineDto[] = [];
  mensaje: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.timelines = wedding.timelines;
      this.mensaje = wedding.mensaje;
    }
  }
}
