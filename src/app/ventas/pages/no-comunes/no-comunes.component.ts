import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Claudia';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Manuel',
    edad: 31,
    direccion: 'Tijuana, Mexico'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);
  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos dato de promesa');
    }, 3500);
  })
  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.nombre = 'Claudia';
      this.genero = 'femenino';
    }
    else {
      this.nombre = 'Manuel';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }
}
