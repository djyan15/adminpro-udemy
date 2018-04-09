import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticulosService } from '../../services/service.index';
import { Articulos } from '../../models/articulos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styles: [],
})
export class ArticuloComponent implements OnInit {
  articulo: Articulos = new Articulos('', 0, '');

  constructor(public _articuloService: ArticulosService,
     public router: Router,
     public activatedRoute: ActivatedRoute,
    public modal: ModalUploadService
    ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id !== 'nuevo') {
        this.cargarArticulos(id);
      }
    });
  }

  ngOnInit() {
this.modal.notificacion
.subscribe(resp => {
console.log(resp);
this.articulo.img = resp.articulo.img;
});


  }
  guardarArticulo(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    this._articuloService.guardarArticulos(this.articulo).subscribe(articulo => {
      this.router.navigate(['/articulos']);
    });
  }
  cargarArticulos(id: string) {
    this._articuloService.cargarArticulosId(id).subscribe(articulos => (this.articulo = articulos));
  }
  cambiarFoto() {

this.modal.mostrarModal('articulos', this.articulo._id);

  }
}
