import { Component, OnInit } from '@angular/core';
import { Articulos } from '../../models/articulos.model';
import { ArticulosService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: [],
})
export class ArticulosComponent implements OnInit {
  articulo: Articulos[] = [];
  desde: number = 0;
  total: number = 0;
  cargando: boolean = false;
  constructor(public modalupload: ModalUploadService, public articuloServices: ArticulosService) {}

  ngOnInit() {
    this.cargarArticulos();
    this.modalupload.notificacion.subscribe(resp => this.cargarArticulos());
  }

  cargarArticulos() {
    this.cargando = true;
    this.articuloServices.cargarArticulos().subscribe((resp: any) => {
      // console.log(resp);
      this.total = resp.total;
      this.articulo = resp.articulos;
      this.cargando = false;
    });
  }
  borrarArticulo(articulo: Articulos) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar el articulo' + articulo.descripcion,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(borrar => {
      if (borrar) {
        this.articuloServices.borrarArticulo(articulo).subscribe(resp => {
          this.cargarArticulos();
        });
        swal('Articulo Borrado', 'Eliminado Correctamente', 'success');
      }
    });
  }
  buscarArticulo(termino: string) {
    if (termino.length <= 0) {
      this.cargarArticulos();
      return;
    }
    this.cargando = true;

    this.articuloServices.buscarArticulo(termino).subscribe((articulos: Articulos[]) => {
      this.articulo = articulos;
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
    this.cargarArticulos();
  }
  mostrarModal(id: string) {
    this.modalupload.mostrarModal('articulos', id);
  }
}
