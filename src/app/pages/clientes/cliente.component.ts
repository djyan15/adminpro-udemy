import { ClientesService } from './../../services/service.index';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [],
})
export class ClienteComponent implements OnInit {
  cliente: Clientes = new Clientes(null, null, null, null);

  forma: FormGroup;
  constructor(public _clientes: ClientesService) {}
  // cedulaValidator(ced: string) {
  //   return (group: FormGroup) => {
  //     let cedula = group.controls[ced].value;
  //     if (cedula === 12345678910) {
  //       return null;
  //     }
  //     return {
  //       cedulaValidator: true,
  //     };
  //   };
  // }

  ngOnInit() {}
  guardarClientes(forma: NgForm) {
    console.log(forma.valid);
    console.log(forma.value);
  }
}
