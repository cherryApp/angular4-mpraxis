import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MssqlService {

  apiUrl: string = "http://localhost:3000";

  constructor(private http: Http) { }

  getSqlData(url, callback) {
    this.http.get(this.apiUrl+url).forEach( res => {
      callback(res.json());
    });
  }

  postSqlData(url, data, callback) {
    data = JSON.stringify(data);
    this.http.post(this.apiUrl+url, data).forEach( res => {
      callback(res.json());
    });
  }

  putSqlData(url, data, callback) {
    data = JSON.stringify(data);
    this.http.put(this.apiUrl+url, data).forEach( res => {
      callback(res.json());
    });
  }

  deleteSqlData(url, callback) {
    this.http.delete(this.apiUrl+url).forEach( res => {
      callback(res.json());
    });
  }

}
