import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clubFilter'
})
export class ClubFilterPipe implements PipeTransform {

  transform(value: any, phrase: any): any {
    return value.filter( item => {
      let done = false;
      for (let k in item) {
        if (!item[k]) {
          continue;
        }
        if (item[k].toLowerCase().indexOf(phrase.toLowerCase()) > -1) {
          done = true;
          break;
        }
      }
      return done;
    });
  }

}
