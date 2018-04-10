import { FacturacionService } from './../../services/facturacion/facturacion.service';
import { Facturacion } from './../../models/facturacion.model';
import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
declare var swal: any;
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: [],
})
export class FacturasComponent implements OnInit {
  factura: Facturacion[] = [];
  desde: number = 0;
  total: number = 0;
  cargando: boolean = false;
  constructor(public modalupload: ModalUploadService, public facturacionService: FacturacionService) {}

  ngOnInit() {
    this.cargarFacturas();
  }
  cargarFacturas() {
    this.cargando = true;
    this.facturacionService.cargarFacturas().subscribe((resp: any) => {
      // console.log(resp.factura);
      this.total = resp.total;
      this.factura = resp.factura;
      this.cargando = false;
    });
  }
  borrarFacturas(facturas: Facturacion) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar la factura del articulo',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(borrar => {
      if (borrar) {
        this.facturacionService.borrarFacturas(facturas).subscribe(resp => {
          this.cargarFacturas();
        });
        swal('Factura Borrado', 'Eliminado Correctamente', 'success');
      }
    });
  }
  buscarFacturas(termino: string) {
    if (termino.length <= 0) {
      this.cargarFacturas();
      return;
    }
    this.cargando = true;

    this.facturacionService.buscarFacturas(termino).subscribe((facturas: Facturacion[]) => {
      console.log(facturas);
      this.factura = facturas;
      this.cargando = false;
    });
  }
  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.total) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarFacturas();
  }
}
