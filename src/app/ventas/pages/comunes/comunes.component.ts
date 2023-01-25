import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styleUrls: ['./comunes.component.css']
})
export class ComunesComponent {


  nombreLower: string = 'edwin';
  nombreUpper: string = 'EDWIN';
  nombreCompleto: string = 'eDwiN oRtIZ';

  fecha: Date = new Date();//El dia de hoy
}
