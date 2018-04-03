import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

declare var swal: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  desde: number = 0;
  total: number = 0;
  cargando: boolean = true;
  constructor(public usuarioService: UsuarioService, public modalupload: ModalUploadService) {}

  ngOnInit() {
    this.cargarUsuarios();
    this.usuarioService.cargarStorage();
    // console.log(this.usuarioService.cargarStorage());
    this.modalupload.notificacion.subscribe(resp => this.cargarUsuarios());
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde).subscribe((resp: any) => {
      // console.log(resp);
      this.total = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
    });
  }
  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.total) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarUsuarios();
  }
  buscarUsuario(termino: string) {

      if (termino.length <= 0) {
        this.cargarUsuarios();
        return;
      }

      this.cargando = true;

      this.usuarioService.buscarUsuarios(termino).subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.cargando = false;
      });
  }
  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this.usuarioService.usuario._id) {
      swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');

      return;
    }
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(borrar => {
      if (borrar) {
        this.usuarioService.borrarUsuarios(usuario).subscribe(resp => {
          console.log('Usuario borrado');
          console.log(usuario);

          this.cargarUsuarios();
        });
        swal('Usuario Borrado', usuario.nombre, 'success');
      }
    });
  }

  guardarUsuario(usuario: Usuario) {

this.usuarioService.actualizarUsuario(usuario)
.subscribe();

  }
  mostrarModal(id: string ) {
this.modalupload.mostrarModal('usuarios', id);
  }
}
