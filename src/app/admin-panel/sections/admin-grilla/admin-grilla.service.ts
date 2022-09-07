import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hermano } from 'src/app/models/hermano.model';
import { Horario } from 'src/app/models/horario.model';
import { Punto } from 'src/app/models/puntos.model';
import { Turno } from 'src/app/models/turno.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGrillaService {
  turno: Turno;
  private turno$: Subject<Turno>;

  reset: boolean;
  private reset$: Subject<boolean>;

  punto: Punto;
  private punto$: Subject<Punto>;

  horario: any;
  private horario$: Subject<any>;

  hermanos: Hermano[];
  private hermanos$: Subject<Hermano[]>;

  actualizarHorario$: Subject<any>;
  

  constructor() {
    this.turno = null;
    this.turno$ = new Subject();

    this.reset = false;
    this.reset$ = new Subject();

    // Componentes de turno

    this.punto = null;
    this.punto$ = new Subject();

    this.horario = null;
    this.horario$ = new Subject();

    this.hermanos = [];
    this.hermanos$ = new Subject();

    this.actualizarHorario$ = new Subject();
  }

  setPunto(punto: Punto) {
    if (!punto) return;
    this.punto = punto;
    this.punto$.next(this.punto);
  }

  setHorario(horario: any) {
    if (!horario) return;
    this.horario = horario;
    this.handleActualizarHorario$();
    this.horario$.next(this.horario);
  }

  setTurno(turno: Turno) {
    if (!turno) return;
    this.turno = turno;
    this.turno$.next(this.turno);
  }

  setHermanos(hermano: Hermano) {
    if (!hermano) return;

    let index = this.hermanos.findIndex((h) => h.id == hermano.id);
    if (index == -1) {
      this.hermanos.push(hermano);
      this.hermanos$.next(this.hermanos);
    } else {
      this.hermanos$.next(this.hermanos.splice(index, 1));
    }
  }

  getTurno$(): Observable<Turno> {
    this.turno = {
      punto: this.punto,
      horario: this.horario,
      hermanos: this.hermanos
    };
    this.setTurno(this.turno);
    this.turno$;
    return this.turno$.asObservable();
  }

  getPunto$(): Observable<Punto> {
    return this.punto$.asObservable();
  }

  getHorario$(): Observable<Horario> {
    return this.horario$.asObservable();
  }

  getHermanos$(): Observable<Hermano[]> {
    return this.hermanos$.asObservable();
  }

  handleActualizarHorario$() {
    this.actualizarHorario$.next();
  }

  getActualizarHorario$() {
    return this.actualizarHorario$.asObservable();
  }

  //TODO: Evitar duplicador en setHermanos y agregar DIA en set Horario
}
