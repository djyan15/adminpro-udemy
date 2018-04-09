import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuarios'): any {

let url = URL_SERVICIOS + '/img';

if ( !img ) {

  return url + '/uuarios/abc';
}

switch (tipo) {

  case 'usuarios':
 url += '/usuarios/' + img;
  break;

  case 'articulos':
 url += '/articulos/' + img;
  break;

  default:
console.log('Tipo de imagen no existe, usaurio, articuulos');
url += '/uuarios/abc';
break;
}
    return url;
  }

}
