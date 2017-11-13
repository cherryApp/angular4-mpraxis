import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigService } from '../lig.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  key: string = "";
  matches: Array<any> = [];
  myFilter: string = "";

  constructor(private route: ActivatedRoute, private lService: LigService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( map => {
      this.key = map.get("id");
    });

    this.matches = this.lService.match;
    this.lService.matchSubject.subscribe( matches => {
      this.matches = matches;
      console.log(this.matches);
    });
  }

}
