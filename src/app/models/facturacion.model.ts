export class Facturacion {
  constructor(
     public estado: string,
     public fecha: Date,
     public cantidad: number,
     public precio: number,
    public comision: number,
    public pago?: string,
     public comentario?: string,
    public articulo?: string,
    public cliente?: string,
    public _id?: string
  ) {}
}
