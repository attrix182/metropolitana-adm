import { Dias, Hermano } from "./hermano.model";
import { Horario } from "./horario.model";
import { Punto } from "./puntos.model";

export interface Turno {
    id?: string;
    punto: Punto;
    horario: Horario | any;
    hermanos:Hermano[]
}

export interface HorarioConfirmacion {
  Dia:Dias,
  Horario:Horario
}