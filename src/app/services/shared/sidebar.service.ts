import { Injectable } from '@angular/core';
import { UsuarioService } from '../service.index';

@Injectable()
export class SidebarService {
  menu: any[] = [];
  // menu: any = [
  //   {
  //     titulo: 'Menu',
  //     icono: 'mdi mdi-menu',
  //     submenu: [
  //       { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-view-dashboard' },
  //       // { titulo: 'ProgressBar', url: '/progress' },
  //       { titulo: 'Gráficas', url: '/graficas1', icono: 'mdi mdi-chart-bar' },
  //       // { titulo: 'Promesas', url: '/promesas' },
  //       // { titulo: 'rxjs', url: '/rxjs' },
  //     ],
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-settings-box',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios', icono: 'mdi mdi-account-box' },
  //       { titulo: 'Articulos', url: '/articulos', icono: 'fa fa-archive' },
  //       { titulo: 'Condiciones de Pagos', url: '/pagos', icono: 'mdi mdi-account-card-details' },
  //       { titulo: 'Clientes', url: '/clientes', icono: 'mdi mdi-account-circle' },
  //     ],
  //   },
  // ];

  constructor(public usuarioservices: UsuarioService) {

  }
  cargarMenu() {
this.menu = this.usuarioservices.menu;

  }

}
