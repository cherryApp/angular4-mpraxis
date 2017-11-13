import { Component, OnInit } from '@angular/core';
import { LigService } from '../lig.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'MPraxis, ahol a praxis kezdődik';

  constructor(private lService: LigService) { }

  ngOnInit() {
  }

}
