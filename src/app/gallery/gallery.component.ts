import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GalleryDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  
  @Input() wedding!: WeddingResponseDto;
  fotos: GalleryDto[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;

      this.fotos = wedding.galleries;

    }
  }
}
