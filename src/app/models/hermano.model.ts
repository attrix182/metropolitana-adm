export interface Hermano {
  id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  congregacion: string;
  edad?: number;
  precursor: boolean;
  disponibilidad: Disponibilidad[];
  activo?:boolean;
}





export interface Disponibilidad {
  dia: Dias;
  horario: Horarios[];
  sabadosPorMes?: number;
  domingosPorMes?: number;
}

export enum Horarios {
  M,
  MD,
  T,
  N,
  TD,
  NP
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
