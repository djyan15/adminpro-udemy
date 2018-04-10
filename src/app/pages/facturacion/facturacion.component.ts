import { Facturacion } from './../../models/facturacion.model';
import { FacturacionService } from './../../services/facturacion/facturacion.service';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { CustomFormsModule, CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/rx';
import { ClientesService, ArticulosService, PagosService } from '../../services/service.index';
import { Pagos } from '../../models/pagos.model';
import { Articulos } from '../../models/articulos.model';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styles: [],
})
export class FacturacionComponent implements OnInit {
  clientes: Clientes[] = [];
  pagos: Pagos[] = [];
  articulos: Articulos[] = [];
  artic: Articulos = new Articulos('', 0, '');
  factura: Facturacion = new Facturacion('', null, 0, 0, 0, '', '', '', '', '');

  constructor(
    public facturacion: FacturacionService,
    public clientesServices: ClientesService,
    public pagosServices: PagosService,
    public articulosServices: ArticulosService
  ) {}

  ngOnInit() {
    this.clientesServices.cargarClientes().subscribe(clientes => (this.clientes = clientes.clientes));

    this.pagosServices.cargarPagos().subscribe(pagos => (this.pagos = pagos.pagos));
    this.articulosServices.cargarArticulos().subscribe(articulo => (this.articulos = articulo.articulos));
  }
  guardarFactura(f: NgForm) {
    console.log(f.valid);
    console.log(f.value);
    if (f.invalid) {
      return;
    }
    this.facturacion.guardarFacturas(this.factura).subscribe(factura => {});
  }
  cambioArticulo (id: string) {

    this.articulosServices.cargarArticulosId(id)
    .subscribe( articulo => this.artic = articulo
);


  }
}
