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
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];


export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);
