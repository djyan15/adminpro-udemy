import { FacturasComponent } from './facturacion/facturas.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { PagosComponent } from './pagos/pagos.component';

import { ArticulosComponent } from './articulos/articulos.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PagoComponent } from './pagos/pago.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajuste del tema' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
      { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil del Usuario' } },
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Resultado de la busqueda' } },
      // Mantenimietnos
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
      { path: 'pagos', component: PagosComponent, data: { titulo: 'Mantenimiento de Pagos' } },
      { path: 'pago/:id', component: PagoComponent, data: { titulo: 'Pagos' } },

      { path: 'cliente/:id', component: ClienteComponent, data: { titulo: 'Clientes' } },
      { path: 'clientes', component: ClientesComponent, data: { titulo: 'Mantenimiento de Clientes' } },
      { path: 'articulos', component: ArticulosComponent, data: { titulo: 'Mantenimiento de Articulos' } },
      { path: 'articulo/:id', component: ArticuloComponent, data: { titulo: 'Articulos' } },
      { path: 'facturacion/:id', component: FacturacionComponent, data: { titulo: 'Realizar Factura de Articulo' } },
      { path: 'facturas', component: FacturasComponent, data: { titulo: 'Facturas de Articulo' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];


export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);
