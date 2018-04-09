import { Clientes } from './../../models/clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/service.index';
declare var swal: any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [],
})
export class ClientesComponent implements OnInit {
  cliente: Clientes[] = [];
  desde: number = 0;
  total: number = 0;
  cargando: boolean = false;
  constructor(public clienteServices: ClientesService) {}

  ngOnInit() {
    this.cargarClientes();
  }
  // actualizarClientes(cliente: Clientes) {}

  cargarClientes() {
    this.cargando = true;
    this.clienteServices.cargarClientes().subscribe((resp: any) => {
      // console.log(resp);
      this.total = resp.total;
      this.cliente = resp.clientes;
      this.cargando = false;
    });
  }
  borrarCliente(cliente: Clientes) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a la forma el cliente ' + cliente.nombreComercial,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(borrar => {
      if (borrar) {
        this.clienteServices.borrarClientes(cliente).subscribe(resp => {
          this.cargarClientes();
        });
        swal('Cliente Borrado', 'Eliminado Correctamente', 'success');
      }
    });
  }
  buscarCliente(termino: string) {
    if (termino.length <= 0) {
      this.cargarClientes();
      return;
    }

    this.cargando = true;

    this.clienteServices.buscarClientes(termino).subscribe((clientes: Clientes[]) => {
      this.cliente = clientes;
      this.cargando = false;
    });
  }
  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.total) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarClientes();
  }
}
