import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageFilter',
})
export class MessageFilterPipe implements PipeTransform {
  transform(items: any, filter: any): any {
    const xitems = items.filter((item: any) => item.msgType === filter);
    return xitems;
  }
}
