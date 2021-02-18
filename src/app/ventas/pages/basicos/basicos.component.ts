import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'manuel';
  nomberUpper: string = 'MANUEL';
  nombreCompleato: string = 'mAnueL';

  fecha: Date = new Date();
}
