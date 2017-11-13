import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LigService } from '../lig.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  liga: Array<{}> = [];
  @Output() searchPhrase: string = "";
  @Output() orderKey: string = "";
  @Output() orderDir: string = "";

  constructor(private router: Router, private lService: LigService) { }

  ngOnInit() {
    this.liga = this.lService.lig;
    this.lService.ligSubject.subscribe( lig => {
      this.liga = lig;
    });
  }

  startOrder(key: string): void {
    if (this.orderKey == key) {
      this.orderDir = this.orderDir == "asc" ? "desc" : "asc";
    } else {
      this.orderKey = key;
      this.orderDir = "asc";
    }
  }

  jumpToMatch(club) {
    this.router.navigate(["meccsek", club.key]);
  }

}
