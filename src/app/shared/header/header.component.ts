import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;
  imagenTemp: any;
  img: any;
  constructor(public _usuarioService: UsuarioService) {

  }


  ngOnInit() {

    this._usuarioService.cargarStorage();
    // console.log(this._usuarioService.cargarStorage());
     this.usuario = this._usuarioService.usuario;
     this.img = this._usuarioService.cargarStorage();
     this.imagenTemp = JSON.parse(localStorage.getItem('usuario'));

    //  console.log(this.imagenTemp.img);
    //  console.log(this.imagenTemp);
    //  console.log(this.img);


  }
}
