import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.route';
import { RegistrerComponent } from './login/registrer.component';
import { PagesModule } from './pages/pages.module';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrerComponent ],
  imports: [BrowserModule, APP_ROUTES, PagesModule, FormsModule, ServiceModule, ReactiveFormsModule, CustomFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
