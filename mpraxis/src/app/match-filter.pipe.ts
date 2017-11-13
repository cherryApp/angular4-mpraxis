import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchFilter'
})
export class MatchFilterPipe implements PipeTransform {

  transform(value: any, key?: any): any {
    return value.filter( item => {
      let done = false;
      if (item.team1.key.toLowerCase().indexOf(key.toLowerCase()) > -1) {
        done = true;
      }
      if (item.team2.key.toLowerCase().indexOf(key.toLowerCase()) > -1) {
        done = true;
      }
      return done;
    });
  }

}
