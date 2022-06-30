import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(cep: string) {
    return cep.substring(0, 5) + "-" + cep.substring(5);
  }

}
