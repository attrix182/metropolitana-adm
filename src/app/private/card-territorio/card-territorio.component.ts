import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-territorio',
  templateUrl: './card-territorio.component.html',
  styleUrls: ['./card-territorio.component.scss']
})
export class CardTerritorioComponent implements OnInit {

  @Input() territorio:any;
 
  constructor() { }

  ngOnInit(): void {
    if(!this.territorio.estado) this.territorio.estado = 'disponible';
  }

}
