import { Pagos } from './../../models/pagos.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/rx';
import { CustomFormsModule, CustomValidators } from 'ng2-validation';
import { PagosService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styles: [],
})
export class PagoComponent implements OnInit {
  // forma: FormGroup;
  pago: Pagos = new Pagos('', 0, '');

  // estados: string [] = ['Activo', 'Inactivo'];
  constructor(public activedRoute: ActivatedRoute, public _pagosServices: PagosService, public router: Router) {
    activedRoute.params.subscribe(params => {
      let id = params['id'];

      if (id !== 'nuevo') {
        this.cargarPagos(id);
      }
    });
  }

  ngOnInit() {}
  cargarPagos(id: string) {
    this._pagosServices.CargarPagosId(id).subscribe(pagos => (this.pago = pagos));
  }
  cantidadbien(cantidad: string) {
    return (group: FormGroup) => {
      let cant = group.controls[cantidad].value;

      if (cant === 402147895244) {
        return null;
      }
      return { cantidabien: true };
    };

    // return null;
  }
  guardarPagos(form: FormControl) {
    // console.log(form.value);
    // console.log(form.valid);

    if (form.invalid) {
      return;
    }
    this._pagosServices.guardarPagos(this.pago).subscribe(pago => {
      this.router.navigate(['/pagos']);
      // console.log(pago);
    });
  }
}

