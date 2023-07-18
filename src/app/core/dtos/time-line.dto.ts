import { BaseDto } from "./base.dto";

export class TimeLineDto extends BaseDto {
  fecha!: Date;
  titulo!: string;
  descripcion!: string;
  icono!: string;
}
