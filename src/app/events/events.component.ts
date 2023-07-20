import { Component, Input } from '@angular/core';
import { EventDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  @Input() wedding!: WeddingResponseDto;
}
