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

  horario: Horario;
  private horario$: Subject<Horario>;


  hermanos: Hermano[];
  private hermanos$: Subject<Hermano[]>;

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
  }

  setPunto(punto:Punto){
    if (!punto) return;
    this.punto = punto;
    console.log(punto);
    this.punto$.next(this.punto);
  }

  setHorario(horario:Horario){
    if (!horario) return;
    this.horario = horario;
    console.log(horario);
    this.horario$.next(this.horario);
  }


  setTurno(turno: Turno) {
    if (!turno) return;
    this.turno = turno;
    console.log(turno);
    this.turno$.next(this.turno);
  }

  setHermanos(hermano: Hermano) {
    if (!hermano) return;
    this.hermanos.push(hermano);
    console.log(hermano);
    this.hermanos$.next(this.hermanos);
  }

  getTurno$(): Observable<Turno> {
    this.turno = {
      punto: this.punto,
      horario: this.horario,
      hermanos: this.hermanos
    }
    this.setTurno(this.turno)
    console.log(this.turno)
    this.turno$ 
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

}
