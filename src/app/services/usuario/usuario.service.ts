import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
// import * as sweetalert from 'sweetalert';
 import * as swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;
  constructor(public http: HttpClient, public router: Router, public _subirArchivo: SubirArchivoService) {

this.cargarStorage();

  }

logueado() {
  return (this.token.length > 5) ? true : false;
}

cargarStorage() {

if ( localStorage.getItem('token')) {
 this.token = localStorage.getItem('token');
 this.usuario = JSON.parse( localStorage.getItem('usuario') );

} else {
   this.token = '';
   this.usuario = null;
}

}
guardarStorage (id: string, token: string, usuario: Usuario) {
localStorage.setItem('id', id);
localStorage.setItem('token', token);
localStorage.setItem('usuario', JSON.stringify(usuario));

this.usuario = usuario;
this.token = token;

}

logout() {
this.usuario = null;
this.token = '';

localStorage.removeItem('token');
localStorage.removeItem('usuario');

this.router.navigate(['/login']);



}


login(usuario: Usuario, recordar: boolean = false) {


  if (recordar ) {
localStorage.setItem('email', usuario.email);

  } else {
    localStorage.removeItem('email');
  }
let url = URL_SERVICIOS + '/login';

return this.http.post(url, usuario)
          .map((resp: any) => {

this.guardarStorage( resp.id, resp.token, resp.usuario);
        return true;
});


}




  crearUsuario(usuario: Usuario) {

let url = URL_SERVICIOS + '/usuario' ;

return this.http.post(url, usuario)
.map( (resp: any) => {

  swal('Usuario Creado', usuario.email, 'success');
return resp.usuario;

});

  }

  actualizarUsuario (usuario: Usuario) {

let url = URL_SERVICIOS + '/usuario/' + usuario._id;
url +=  '?token=' + this.token;

console.log(url);
return this.http.put(url, usuario)
.map((resp: any) => {
// this.usuario = resp.usuario;

let user: Usuario = resp.usuario;
this.guardarStorage(user._id, this.token , user);
swal('Usuario Actualizado', usuario.nombre , 'success');

return true;
});

  }
  cambiarImagen(archivo: File, id: string) {

this._subirArchivo.subirArchivo(archivo, 'usuarios', id)
.then((resp: any) => {
console.log(resp);

this.usuario.img = resp.usuario.img;
swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );

this.guardarStorage(id, this.token, this.usuario);

})
.catch(resp => {
console.log(resp);
});

  }

}