import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import * as swal from 'sweetalert';
// declare var swal: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
imagenTemp: string;

  imagenSubir: File;
  constructor(public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {}

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;

    this._usuarioService.actualizarUsuario(this.usuario).subscribe(resp => {
      console.log(resp);
    });
  }
  seleccionImage( archivo: File) {
if (!archivo) {
  this.imagenSubir = null;
return;
}

if (archivo.type.indexOf('image') < 0) {

swal('Solo Imágenes', 'El archivo seleccionado no es una imagen', 'error');
this.imagenSubir = null;
return;
}

this.imagenSubir = archivo;

 let reader = new FileReader();
 let urlImagenTemp = reader.readAsDataURL(archivo);

 reader.onloadend = () => (this.imagenTemp = reader.result);

  }


  cambiarImagen() {
this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
console.log('envio');

  }
}
