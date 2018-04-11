import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';

// import * as _swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// const swal: SweetAlert = _swal as any;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];
  constructor(public http: HttpClient, public router: Router, public _subirArchivo: SubirArchivoService) {

  this.cargarStorage();
  //  console.log(this.cargarStorage());
  }

logueado() {
  return (this.token.length > 5) ? true : false;
}

cargarStorage() {

if ( localStorage.getItem('token')) {
 this.token = localStorage.getItem('token');
 this.usuario = JSON.parse( localStorage.getItem('usuario') );
 this.menu = JSON.parse(localStorage.getItem('menu'));

 return this.usuario;
} else {
   this.token = '';
   this.usuario = null;
   this.menu = [];
}
// tslint:disable-next-line:no-debugger
// debugger;
}
guardarStorage (id: string, token: string, usuario: Usuario, menu: any) {
localStorage.setItem('id', id);
localStorage.setItem('token', token);
localStorage.setItem('usuario', JSON.stringify(usuario));
localStorage.setItem('menu', JSON.stringify(menu));

this.usuario = usuario;
this.token = token;
this.menu = menu;
}

logout() {
this.usuario = null;
this.token = '';
this.menu = [];
localStorage.removeItem('token');
localStorage.removeItem('usuario');
localStorage.removeItem('menu');

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
           this.guardarStorage( resp.id, resp.token, resp.usuario, resp.menu );
           return true;
           }).catch(err => {


             swal('Error en el login', err.error.mensaje, 'error');
return Observable.throw(err );
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

// console.log(url);
return this.http.put(url, usuario)
.map((resp: any) => {
// this.usuario = resp.usuario;
if (usuario._id === this.usuario._id) {
  let user: Usuario = resp.usuario;
  this.guardarStorage(user._id, this.token, user, this.menu);
}


swal('Usuario Actualizado', usuario.nombre , 'success');

return true;
});

  }
  cambiarImagen(archivo: File, id: string) {
// console.log(archivo.name, id);
this._subirArchivo.subirArchivo(archivo, 'usuarios', id)

.then((resp: any) => {
// console.log(resp);

this.usuario.img = resp.usuario.img;
swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );

this.guardarStorage(id, this.token, this.usuario, this.menu);

})
.catch(resp => {
console.log(resp);
});

  }


  cargarUsuarios( desde: number = 0) {
let url = URL_SERVICIOS + '/usuario?desde=' + desde;

return this.http.get( url );


  }
  buscarUsuarios(termino: string) {


let url = URL_SERVICIOS + '/busqueda/coleccion/usuario/' + termino;
return this.http.get( url ).map((resp: any) => resp.usuario);
  }
  borrarUsuarios(usuario: Usuario) {
let url = URL_SERVICIOS + '/usuario/' + usuario._id + '?token=' + this.token;


return this.http.delete(  url );


  }

}
