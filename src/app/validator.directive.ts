import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { Directive } from '@angular/core';


function validacionCedula(ced: AbstractControl) {
if (ced.value === '12345678910') {
return null;
}
if (ced.value === '40212974923') {
return {
  valCedula: true
};
}
return null;


}
@Directive({
// tslint:disable-next-line:directive-selector
selector: '[val-cedula]',
providers: [

{provide: NG_VALIDATORS, multi: true, useValue: validacionCedula }
]


})

// tslint:disable-next-line:directive-class-suffix
export class ValidaCedula {

}
