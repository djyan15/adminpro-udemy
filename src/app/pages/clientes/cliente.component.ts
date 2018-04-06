import { ClientesService } from './../../services/service.index';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { CustomFormsModule, CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [],
})
export class ClienteComponent implements OnInit {
  cliente: Clientes = new Clientes(null, null, null, null);
  // cliente.estado = '';
  // forma: FormGroup;
  constructor(public _clientes: ClientesService) {}

  ngOnInit() {}
  guardarClientes(forma: NgForm) {
    console.log(forma.valid);
    console.log(forma.value);
  }
  validarCedula(cedula: string) {
    return (group: FormGroup) => {
      let cant = group.controls[cedula].value;
      let calculo: number;
      let total: number = 0;

      let vCedula = cedula.replace(/-/g, '');
      let Veri = 0;

      let longCed = vCedula.trim().length;
      let verificador = Number(vCedula.substr(vCedula.length - 1, 1));
      let digito: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

      if (longCed !== 11) {
        return false;
      }
      for (let i = 1; i <= 10; i++) {
        calculo = Number(vCedula.substr(i - 1, 1)) * digito[i - 1];

        if (calculo < 10) {
          total += calculo;
        } else {
          total += Number(calculo.toString().substr(0, 1)) + Number(calculo.toString().substr(1, 1));
        }
        Veri = 10 - total % 10;
      }
      if (Veri === 10 || Veri === verificador) {
        return { validarCedula: true };
      } else {
        return false;
      }
    };
  }
}
