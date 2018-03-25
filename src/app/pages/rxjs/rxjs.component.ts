import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
let obs = new Observable(observer => {
let contador = 0;

let intervalo = setInterval(() => {

contador += 1;

  observer.next(contador);
if (contador === 3) {
clearInterval(intervalo);
  observer.complete();

}
if (contador === 2){

  observer.error();
}


}, 1000);


});
obs.subscribe(numero => console.log('subs', numero ),
error => console.error('Error en el obs', error),
() => console.log('El observador terminar')

);


   }

  ngOnInit() {
  }

}
