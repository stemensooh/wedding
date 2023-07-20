import { Pipe, PipeTransform } from '@angular/core';
import { CuplerDto } from '../dtos/wedding-response.dto';

@Pipe({
  name: 'cupler'
})
export class CuplerPipe implements PipeTransform {

  transform(value: CuplerDto[]): CuplerDto | undefined {
    return value ? value[0] : undefined;
  }

}
