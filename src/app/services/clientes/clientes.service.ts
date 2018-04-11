import { Clientes } from './../../models/clientes.model';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs/Observable';


declare var swal: any;
@Injectable()
export class ClientesService {
  cliente: Clientes;
  total: number = 0;
  constructor(public http: HttpClient, public _usuarioServices: UsuarioService) {}
  borrarClientes(cliente: Clientes) {
    let url = URL_SERVICIOS + '/cliente/' + cliente._id;

    url += '?token=' + this._usuarioServices.token;

    return this.http.delete(url);
  }
  //  actualizarClientes(cliente: Clientes) {
  // let url = URL_SERVICIOS + '/cliente/' + cliente._id;

  // url += '?token=' + this._usuarioServices.token;

  // return this.http.put(url, cliente);
  //  }
  cargarClientesId(id: string) {
    let url = URL_SERVICIOS + '/cliente/' + id;

    return this.http.get(url).map((resp: any) => resp.cliente);
  }
  guardarClientes(cliente: Clientes) {
    let url = URL_SERVICIOS + '/cliente';

    if (cliente._id) {
      // Actualizar
      url += '/' + cliente._id;
      url += '?token=' + this._usuarioServices.token;

      return this.http
        .put(url, cliente)
        .map((resp: any) => {
          swal('Cliente Actualizado', cliente.nombreComercial, 'success');
          return resp.clientes;
        })
        .catch(err => {
          swal(err.error.mensaje, err.error.errors.message, 'error');
          return Observable.throw(err);
        });
    } else {
      url += '?token=' + this._usuarioServices.token;
      return this.http
        .post(url, cliente)
        .map((resp: any) => {
          swal('Cliente Creado', cliente.nombreComercial, 'success');
          return resp.clientes;
        }).catch(err => {
          swal(err.error.mensaje, err.error.errors.message, 'error');
          return Observable.throw(err);
        });
    }
  }
  //  crearClientes (cliente: Clientes) {
  // let url = URL_SERVICIOS + '/cliente';
  // url += '?token=' + this._usuarioServices.token;
  //  this.http.post(url, cliente)
  // .map((resp: any) => {
  // swal('Cliente Creado', cliente.nombreComercial, 'success');
  // return resp.medico;

  // });
  //  }
  cargarClientes() {
    let url = URL_SERVICIOS + '/cliente';

    return this.http.get(url).map((resp: any) => {
      this.total = resp.total;
      // console.log(resp);
      return resp;
    });
  }

  buscarClientes(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/cliente/' + termino;
    return this.http.get(url).map((resp: any) => resp.cliente);
  }
}
