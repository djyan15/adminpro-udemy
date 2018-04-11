import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [],
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    'grafico1': {
      'labels': ['Zapato', 'Lente', 'Sandalia'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Los articulos son: '
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Articulos mas usados por:'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };




 constructor() {}

  ngOnInit() {}


  }

