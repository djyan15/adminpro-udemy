import { SubirArchivoService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from './modal-upload.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [],
})
export class ModalUploadComponent implements OnInit {
  imagenTemp: string;

  imagenSubir: File;

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, public _subirArchivoService: SubirArchivoService, public _modalupload: ModalUploadService, public usuarioService: UsuarioService) {}

  ngOnInit() {}
  seleccionImage(archivo: File) {
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
    // console.log(reader.result);
  }

  subirImagen() {
    this._subirArchivoService.subirArchivo(this.imagenSubir, this._modalupload.tipo, this._modalupload.id)
      .then((resp: any) => {
// console.log(this._modalupload.id);
// console.log(this.usuarioService.usuario._id);
if (this._modalupload.id === this.usuarioService.usuario._id) {
this.usuarioService.guardarStorage(this._modalupload.id, this.usuarioService.token, resp.usuario, resp.menu);

  this._modalupload.notificacion.emit(resp);
  this.cerrarModal();
}
this._modalupload.notificacion.emit(resp);
this.cerrarModal();


})
.catch(err => {
console.log('Error en la carga...');
});
// location.reload(true);
}
  cerrarModal() {
this.imagenSubir = null;
this.imagenTemp = null;
this._modalupload.ocultarModal();
  }
}
