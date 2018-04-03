import { ClientesService } from './clientes/clientes.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, LoginGuardGuard, SidebarService, SharedService, UsuarioService, SubirArchivoService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { PagosService } from './pagos/pagos.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LoginGuardGuard,
     SettingsService,
      UsuarioService,
       SidebarService,
        SharedService,
         SubirArchivoService, ClientesService, ModalUploadService, PagosService],

  declarations: [],
})
export class ServiceModule {}
