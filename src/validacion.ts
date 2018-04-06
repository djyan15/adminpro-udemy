


function  validacionCedula(cedula: string) {
let total: number = 0;
let vCedula = cedula.replace(/-/g, '');
let longCed = vCedula.trim().length;

let digito: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

if (longCed < 11 || longCed > 11) {
return false;
}
for (let i = 1; i <= longCed; i++) {
let calculo: number = Number(vCedula.substring( i - 1, 1 )) * digito[i - 1];

if (calculo < 10) {
  total += calculo;
} else {
total += Number(calculo.toString().substring(0, 1)) + Number(calculo.toString().substring(1, 1));
}

if (total % 10 === 0 ) {

  return true;

} else {
  return false;
}

}



}
