import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnChanges {

  @Input() wedding!: WeddingResponseDto;
  eventos: EventDto[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.eventos = wedding.events;
    }
  }
}
