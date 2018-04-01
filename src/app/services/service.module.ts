
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, LoginGuardGuard, SidebarService, SharedService, UsuarioService, SubirArchivoService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LoginGuardGuard,
     SettingsService,
      UsuarioService,
       SidebarService,
        SharedService,
         SubirArchivoService],

  declarations: [],
})
export class ServiceModule {}
