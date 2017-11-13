import { Component, OnInit } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Array<{title: string, link: string}> = [
    {title: "Home", link: "/"},
    {title: "Meccsek", link: "/meccsek"},
    {title: "Rólunk", link: "/rolunk"},
    {title: "Kapcsolat", link: "/kapcsolat"},
    {title: "Regisztráció", link: "/regisztracio"},
    {title: "Chat", link: "/chat"}
  ];

  constructor(private http: Http) {
    const self = this;
    setTimeout(function() {
      self.menuItems[0].title = "Főoldal";
    }, 5000);


  }

  ngOnInit() {

  }

}
