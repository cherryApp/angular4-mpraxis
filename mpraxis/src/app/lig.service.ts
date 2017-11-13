import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LigService {

  lig: any = [];
  match: any = [];
  ligSubject: Subject<any> = new Subject;
  matchSubject: Subject<any> = new Subject;

  constructor(private http: Http) {
    this.getLig();
    this.getMatch();
  }

  getLig() {
    let url = "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.clubs.json";
    this.http.get(url).forEach( value => {
      this.lig = value.json().clubs;
      this.ligSubject.next(this.lig);
    });
  }

  getMatch() {
    let url = "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json";
    this.http.get(url).forEach( value => {
      let rounds = value.json().rounds;
      this.match = this.collectMatches(rounds);
      this.matchSubject.next(this.match);
    });
  }

  collectMatches(rounds) {
    let matches = [];
    for (var k in rounds) {
      matches = matches.concat(rounds[k].matches);
    }
    return matches;
  }

}
