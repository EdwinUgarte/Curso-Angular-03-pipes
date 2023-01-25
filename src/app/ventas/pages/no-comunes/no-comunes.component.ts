import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18nSelect

  persona = {
    nombre: 'Edwin',
    genero: 'masculino',
  };

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural

  clientes: string[] = [
    'Maria',
    'Edwin',
    'Pedro',
    'Lourdes',
    'Paco',
    'Jose',
    'Victor',
  ];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': '1 cliente esperando',
    other: '# clientes esperando',
  };

  cambiarCliente(nombre: string) {
    if (nombre === 'Edwin') {
      this.persona.nombre = 'María';
      this.persona.genero = 'femenino';
    } else {
      this.persona.nombre = 'Edwin';
      this.persona.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe

  usuario = {
    nombre: 'Edwin',
    edad: 24,
    pais: 'Mexico',
  };

  //JSON Pipe 

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: true
    },
  ]
  
  
  
  // Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })
  
  
  
}