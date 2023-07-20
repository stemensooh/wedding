import { Component, Input } from '@angular/core';
import { WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  @Input() wedding!: WeddingResponseDto;
}
