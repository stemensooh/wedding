import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ParametrosService } from '../core/services/parametros.service';
import { ParametroDto } from '../core/dtos/parametro.dto';
import { CuplerDto, WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent  {
  
  @Input() cupler!: CuplerDto | undefined;

}
