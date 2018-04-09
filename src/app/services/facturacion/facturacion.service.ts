import { Facturacion } from './../../models/facturacion.model';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';


import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { UsuarioService } from '../service.index';
declare var swal: any;
@Injectable()
export class FacturacionService {
  factura: Facturacion;
  constructor(public http: HttpClient, public _usuarioServices: UsuarioService) {}
  borrarFacturas(facturas: Facturacion) {
    let url = URL_SERVICIOS + '/facturacion/' + facturas._id;

    url += '?token=' + this._usuarioServices.token;

    return this.http.delete(url);
  }
  cargarFacturasId(id: string) {
    let url = URL_SERVICIOS + '/facturacion/' + id;

    return this.http.get(url).map((resp: any) => resp.articulo);
  }

  guardarFacturas(facturas: Facturacion) {
    let url = URL_SERVICIOS + '/facturacion';

    if (facturas._id) {
      // Actualizar
      url += '/' + facturas._id;
      url += '?token=' + this._usuarioServices.token;

      return this.http.put(url, facturas).map((resp: any) => {
        swal('Factura Actualizado', 'se facturo el ' + facturas.articulo, 'success');
        return resp.articulo;
      });
    } else {
      // crear
      url += '?token=' + this._usuarioServices.token;
      return this.http.post(url, facturas).map((resp: any) => {
        swal('Facturación', 'se facturo el ' + facturas.articulo, 'success');
        return resp.articulo;
      });
    }
  }
  cargarFacturas() {
    let url = URL_SERVICIOS + '/facturacion';

    return this.http.get(url);
  }

  buscarFacturas(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/facturacion/' + termino;
    return this.http.get(url).map((resp: any) => resp.factura);
  }
}
