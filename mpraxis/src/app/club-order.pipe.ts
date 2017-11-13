import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clubOrder'
})
export class ClubOrderPipe implements PipeTransform {

  transform(value: any, key: string, direction: string): any {
    if (key == "" || direction == "") {
      return value;
    }

    value.sort( (a, b) => {
      if (direction == "asc") {
        if (!b[key]) {
          return 1;
        }
        if (!a[key]) {
          return -1;
        }
        return a[key].toString().localeCompare(b[key].toString());
      } else {
        if (!a[key]) {
          return 1;
        }
        if (!b[key]) {
          return -1;
        }
        return b[key].toString().localeCompare(a[key].toString());
      }
    });

    return value;
  }

}
