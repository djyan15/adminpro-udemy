import { Router } from '@angular/router';
import { PagosService } from './../../services/service.index';
import { Pagos } from './../../models/pagos.model';
import { Component, OnInit } from '@angular/core';
declare var swal: any;
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styles: [],
})
export class PagosComponent implements OnInit {
  pagos: Pagos[] = [];
  total: number = 0;
  cargando: boolean = false;
  constructor(public _pagosServices: PagosService, public router: Router) {}

  ngOnInit() {
    this.cargarPagos();
  }


  borrarPagos(pagos: Pagos) {

swal({
  title: '¿Esta seguro?',
  text: 'Esta a punto de borrar a la forma de pago ' + pagos.descripcion,
  icon: 'warning',
  buttons: true,
  dangerMode: true,
}).then(borrar => {
  if (borrar) {
    this._pagosServices.borrarPagos(pagos).subscribe(resp => {


      this.cargarPagos();
    });
swal('Pago Borrado', 'Eliminado Correctamente', 'success');  }
});

  }
  cargarPagos() {
    this.cargando = true;
    this._pagosServices.cargarPagos().subscribe((resp: any) => {
      this.total = resp.total;
      this.pagos = resp.pagos;
      this.cargando = false;
    });
  }
  // editarPagos(pagos: Pagos) {
  //   this.router.navigate(['/pago']);
  // }
//   guardarPagos(pagos: Pagos) {

// this._pagosServices.actualizarPagos(pagos).subscribe((resp: any) => {
// swal('Pago guardado', resp.pagos.descripcion, 'success');

// });


//   }
}
