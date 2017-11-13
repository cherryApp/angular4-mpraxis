import { Component, OnInit } from '@angular/core';
import { MssqlService } from '../mssql.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  tableData: Array<any> = [];
  tableKeys: Array<any> = [];

  constructor(private mssql:MssqlService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.mssql.getSqlData("/AngularUsers", (data) => {
      console.log(data);
      this.tableKeys = Object.keys(data[0]);
      this.tableData = data;
    });
  }

  updateRow(row) {
    this.mssql.postSqlData("/AngularUsers/"+row.UserID, row, (res) => {
      console.info(res);
    });
  }

  deleteRow(row) {
    this.mssql.deleteSqlData("/AngularUsers/"+row.UserID, (res) => {
      console.info(res);
      if (!res.message) {
        this.getTableData();
      }
    });
  }

}
