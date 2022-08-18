export interface Hermano {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  congregacion: string;
  edad?: number;
  precursor: boolean;
  disponibilidad: Disponibilidad[];
  repeticionDiasPorMes: DiasPorMes[]
  activo?:boolean;
}

export interface DiasPorMes{
  dia: DiasFinDeSemana,
  veces:number
}

export interface Disponibilidad {
  dia: Dias;
  horario: Horarios[];
}

export enum Horarios {
  NP,
  M,
  MD,
  T,
  N,
  TD
}

export enum Dias {
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo
}

export enum DiasFinDeSemana {
  sabado,
  domingo
}
