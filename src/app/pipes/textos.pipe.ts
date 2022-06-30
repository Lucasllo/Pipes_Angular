import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textos',
  pure: false // pure faz com que pipe sempre
})
export class TextosPipe implements PipeTransform {

  transform(textos: string[]){
    return textos.join(", ");
  }

}
