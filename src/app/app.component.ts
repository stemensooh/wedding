import { Component } from '@angular/core';
import { ParametrosService } from './core/services/parametros.service';
import { WeddingService } from './core/services/wedding.service';
import { WeddingDto } from './core/dtos/wedding.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding';

  constructor(private weddingService: WeddingService){
    this.weddingService.getAll().subscribe((data: WeddingDto[]) => {
      console.log(data);
    });
  }
}
