import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Output()
  cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.porcentaje);
  }

  ngOnInit() {}

  onChanges(value: number) {
   // let elemHtlm: any = document.getElementsByName('progreso')[0];
   //  console.log(this.txtProgress);

    if (value >= 100) {
      this.porcentaje = 100;
    } else if (value <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = value;
    }
   // elemHtlm.value = this.porcentaje;
   this.txtProgress.nativeElement.value = this.porcentaje;
   this.cambioValor.emit(this.porcentaje);

  }

  progress(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
       this.txtProgress.nativeElement.focus();
  }
}
