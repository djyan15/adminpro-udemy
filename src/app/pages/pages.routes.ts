import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'promesas', component: PromesasComponent },
      { path: 'rxjs', component: RxjsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];


export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);
