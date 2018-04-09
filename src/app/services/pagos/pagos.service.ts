import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../usuario/usuario.service';
import { Pagos } from '../../models/pagos.model';
 declare var swal: any;
@Injectable()
export class PagosService {
  pagos: Pagos;
  constructor(public http: HttpClient, public _usuarioServices: UsuarioService) {}
  cargarPagos() {
    let url = URL_SERVICIOS + '/pagos';

   return this.http.get( url );
  }
guardarPagos(pago: Pagos) {

 let url = URL_SERVICIOS + '/pagos';


if (pago._id) {
// ACTUALIZAR

  url += '/' + pago._id;
  url += '?token=' + this._usuarioServices.token;

  return this.http.put(url, pago).map((resp: any) => {
    swal('Pago Actualizado', pago.descripcion, 'success');
    return resp.pagos;
  });



} else {
// CREAR

url += '?token=' + this._usuarioServices.token;
return this.http.post(url, pago)
.map((resp: any) => {
  swal('Pago Creado', pago.descripcion, 'success');
  return resp.pagos;
});

}




}
CargarPagosId(id: string) {

let url = URL_SERVICIOS + '/pagos/' + id;

return this.http.get(url)
.map((resp: any) => resp.pagos);

}
// actualizarPagos(pago: Pagos) {




// }
borrarPagos(pago: Pagos) {

let url = URL_SERVICIOS + '/pagos/' + pago._id;

url += '?token=' + this._usuarioServices.token;

return this.http.delete( url );

}
obtenerPagos(id: string) {
let url = URL_SERVICIOS + '/pagos/' + id;

return this.http.get(url)
.map((resp: any) => resp.pagos);
}
}
