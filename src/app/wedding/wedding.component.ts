import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeddingService } from '../core/services/wedding.service';
import { WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent {

  wedding!: WeddingResponseDto;

  constructor(
    private weddingService: WeddingService,
    private _router: ActivatedRoute,
  ) {
    this._router.params.subscribe((params) => {
      this.weddingService
        .getTitulo(params['titulo'])
        .subscribe((data: WeddingResponseDto) => {
          this.wedding = data;
          console.log(this.wedding);
        });
    });
  }
}
