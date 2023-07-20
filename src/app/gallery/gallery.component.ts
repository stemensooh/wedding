import { Component, Input } from '@angular/core';
import { GalleryDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() wedding!: WeddingResponseDto;

}
