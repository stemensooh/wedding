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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParametrosService } from './core/services/parametros.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ParametrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
