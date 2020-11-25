import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miFecha'
})
export class MiFechaPipe implements PipeTransform {

  transform(value: string ): string {
    const meses:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    // Como se conoce el formato de la fecha podemos asumir sus posiciones dentro del string
    // Cabe mencionar que esa el pipe date pero por efectos de practica se realiza este pipe
    let dia:string = value.substring(0,2);
    let mes: number =  +value.substring(3,5);
    let anio: string = value.substring(6,10);

    return `${dia} de ${meses[mes-1]} del año ${anio}`;
  }

}
