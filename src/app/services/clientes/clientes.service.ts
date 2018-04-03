import { Clientes } from './../../models/clientes.model';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../usuario/usuario.service';

declare var swal: any;
@Injectable()
export class ClientesService {
  cliente: Clientes;
  constructor(public http: HttpClient, public _usuarioServices: UsuarioService) {}
borrarClientes(cliente: Clientes) {
    let url = URL_SERVICIOS + '/cliente/' + cliente._id;

 url += '?token=' + this._usuarioServices.token;

    return this.http.delete(url);
 }
 actualizarClientes(cliente: Clientes) {
let url = URL_SERVICIOS + '/cliente/' + cliente._id;

url += '?token=' + this._usuarioServices.token;

return this.http.put(url, cliente);
 }
 crearClientes () {

 }
 cargarClientes() {
let url = URL_SERVICIOS + '/cliente';

return this.http.get(url);
 }
}
