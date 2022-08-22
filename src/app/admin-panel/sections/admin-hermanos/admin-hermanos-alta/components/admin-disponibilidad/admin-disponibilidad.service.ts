import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Disponibilidad } from 'src/app/models/hermano.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDisponibilidadService {

  disponibilidad: Disponibilidad[];
  private disponibilidad$: Subject<Disponibilidad[]>;
  reset:boolean;
  private reset$: Subject<boolean>;


  constructor() { 
    this.disponibilidad = [];
    this.disponibilidad$ = new Subject();

    this.reset = false;
    this.reset$ = new Subject();
  }

  setDisponibilidad(disponibilidad: Disponibilidad[]) {
    if(!disponibilidad) return;
    this.disponibilidad = disponibilidad;
    this.disponibilidad$.next(this.disponibilidad);
  }

  getDisponibilidad$(): Observable<Disponibilidad[]> {
    return this.disponibilidad$.asObservable();
  }

  setResetDisponibilidad(reset) {
    this.reset = reset;
    this.reset$.next(this.reset);
  }

  getResetDisponibilidad(): Observable<any> {
    return this.reset$.asObservable();
  }

}
