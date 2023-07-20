import { Component, Input } from '@angular/core';
import { MapDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  @Input() wedding!: WeddingResponseDto;

}
