import { Injectable } from '@angular/core';
import { Articulos } from '../../models/articulos.model';
import { UsuarioService } from '../service.index';
import { URL_SERVICIOS } from './../../config/config';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
declare var swal: any;

@Injectable()
export class ArticulosService {
  articulo: Articulos;
total: number = 0;
  constructor(public http: HttpClient, public _usuarioServices: UsuarioService) {}

  borrarArticulo(articulo: Articulos) {
    let url = URL_SERVICIOS + '/articulo/' + articulo._id;

    url += '?token=' + this._usuarioServices.token;

    return this.http.delete(url);
  }
  cargarArticulosId(id: string) {
    let url = URL_SERVICIOS + '/articulo/' + id;

    return this.http.get(url).map((resp: any) => resp.articulo);
  }

  guardarArticulos(articulo: Articulos) {
    let url = URL_SERVICIOS + '/articulo';

    if (articulo._id) {
      // Actualizar
      url += '/' + articulo._id;
      url += '?token=' + this._usuarioServices.token;

      return this.http.put(url, articulo).map((resp: any) => {
        swal('Articulo Actualizado', articulo.descripcion, 'success');
        return resp.articulo;
      });
    } else {
      // crear
      url += '?token=' + this._usuarioServices.token;
      return this.http.post(url, articulo).map((resp: any) => {
        swal('Articulo Creado', articulo.descripcion, 'success');
        return resp.articulo;
      });
    }
  }
  cargarArticulos() {
    let url = URL_SERVICIOS + '/articulo';

    return this.http.get(url).map((resp: any) => {
    // resp.total;
      // console.log(resp);
      return resp;
    });
  }

  buscarArticulo(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/articulo/' + termino;
    return this.http.get(url).map((resp: any) => resp.articulo);
  }
}

