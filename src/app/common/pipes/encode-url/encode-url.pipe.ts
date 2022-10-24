import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeUrl'
})
export class EncodeUrlPipe implements PipeTransform {

  transform(value: any): any {
    const obj = {
      data: value
    }
    return encodeURIComponent(btoa(JSON.stringify(obj)));
    // return value;
  }

}
