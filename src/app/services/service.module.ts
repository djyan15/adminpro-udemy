

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import {
  SettingsService,
  LoginGuardGuard,
  ArticulosService, SidebarService,
  ClientesService,
  SharedService,
  UsuarioService,
  SubirArchivoService,
  AdminGuard
} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { PagosService } from './pagos/pagos.service';
import { FacturacionService } from './facturacion/facturacion.service';
// import {  ArticulosService } from './articulos/articulos.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LoginGuardGuard, AdminGuard,
     SettingsService,
      UsuarioService,
       SidebarService,
        SharedService,
         SubirArchivoService,
          ArticulosService,
           ClientesService,
           ModalUploadService,
           FacturacionService,
           PagosService],

  declarations: [],
})
export class ServiceModule {}
