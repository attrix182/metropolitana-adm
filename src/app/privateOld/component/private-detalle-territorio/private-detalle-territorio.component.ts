import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-private-detalle-territorio',
  templateUrl: './private-detalle-territorio.component.html',
  styleUrls: ['./private-detalle-territorio.component.scss']
})
export class PrivateDetalleTerritorioComponent implements OnInit {
  @Input() territorio: any;
  @Output() onBack = new EventEmitter();
  searchParam:any;

  constructor() { }

  backToCards(){
    this.onBack.emit();
  }

  ngOnInit(): void {
  }

}
