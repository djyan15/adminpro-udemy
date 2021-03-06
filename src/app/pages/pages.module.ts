import { PagoComponent } from './pagos/pago.component';
import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { PagesRoutingModule } from './pages.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PagosComponent } from './pagos/pagos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { FacturasComponent } from './facturacion/facturas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ArticulosComponent,
    PagosComponent,
    ClientesComponent,
    FacturacionComponent,
    ModalUploadComponent,
    PagoComponent,
    ClienteComponent,
    ArticuloComponent,
    FacturasComponent,
    BusquedaComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
  ],
  // tslint:disable-next-line:max-line-length
  imports: [SharedModule, OwlDateTimeModule, OwlNativeDateTimeModule , ReactiveFormsModule, PipesModule, CommonModule, PagesRoutingModule, FormsModule, ChartsModule],
})
export class PagesModule {}
