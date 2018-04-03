import { Clientes } from './../../models/clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/service.index';

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
  actualizarClientes(cliente: Clientes) {}

  cargarClientes() {
    this.cargando = true;
this.clienteServices.cargarClientes().subscribe((resp: any) => {
  console.log(resp);
  this.total = resp.total;
    this.cliente = resp.clientes;
    this.cargando = false;
});

  }
  borrarCliente(cliente: Clientes) {}
}
