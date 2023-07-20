import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MapDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnChanges{
  // @ViewChild(GoogleMap, { static: false }) map: GoogleMap = new GoogleMap(null, null, null);
  @Input() wedding!: WeddingResponseDto;

  mapas: MapDto[] = [];
  
  optionsMarket: google.maps.MarkerOptions = {
    animation: google.maps.Animation.BOUNCE,
  }

  // optionsMap: google.maps.MapOptions = {
  //   styles: styles
  // }

  styles :google.maps.MapTypeStyle[] = [
    {
      elementType: 'geometry',
      stylers: [
        {
          'width': 'auto'
        }
      ]
    }
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      // this.map.googleMap.setOptions({styles: this.styles});
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.mapas = wedding.maps;
    }

  }
}
