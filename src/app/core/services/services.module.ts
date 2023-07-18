import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';
import { ParametrosService } from './parametros.service';
import { SliderService } from './slider.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GalleryService,
    ParametrosService,
    SliderService
  ],
})
export class ServicesModule { }
