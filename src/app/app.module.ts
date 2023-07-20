import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { DatosComponent } from './datos/datos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { MapsComponent } from './maps/maps.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParametrosService } from './core/services/parametros.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GalleryService } from './core/services/gallery.service';
import { SliderService } from './core/services/slider.service';
import { TimeLineService } from './core/services/time-line.service';
import { WeddingService } from './core/services/wedding.service';
import { WeddingComponent } from './wedding/wedding.component';
import { AppRoutingModule } from './app-routing.module';
import { CuplerPipe } from './core/pipes/cupler.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    DatosComponent,
    GalleryComponent,
    EventsComponent,
    MapsComponent,
    ReservationComponent,
    FooterComponent,
    TimelineComponent,
    WeddingComponent,
    CuplerPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgbCarouselModule
  ],
  providers: [
    ParametrosService,
    GalleryService,
    SliderService,
    TimeLineService,
    WeddingService,
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
