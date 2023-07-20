import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  CuplerDto,
  SliderDto,
  WeddingResponseDto,
} from '../core/dtos/wedding-response.dto';

import * as vegas from 'vegas';
import * as countdown from 'countdown';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnChanges {
  @Input() slider!: SliderDto[];
  @Input() wedding!: WeddingResponseDto | undefined;

  nombresNovios: string = '';
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      const cupler = wedding.cupler[0];

      this.nombresNovios = `${cupler?.noviaNombre} & ${cupler?.novioNombre}`;
      console.log(this.nombresNovios);

      const sliders = wedding.sliders.map(
        (item) => {
          return {
            src: item.foto,
          };
        }
      );

      $('#vegas-slideshow').vegas({
        delay: 4000,
        transition: 'fade2',
        transitionDuration: 1000,
        slides: sliders,
      });

      // const ts = countdown(Date.now(), wedding.fecha, countdown.SECONDS);
      // console.log(ts);
    }
  }
}
