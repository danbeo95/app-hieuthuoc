import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Config } from '../app-config';
import { APP_TABLE } from '../app-table';
import { APP_KEY } from '../app-key';
import { APP_CMD } from '../app-cmd';
import { THUOC } from '../app-class/thuoc';
import { User } from '../app-class/user';
export class LoadDataController {
  mHttp: HttpClient;
  mHost: string = Config.host;
  constructor() {

  }
  setHttp(http: HttpClient) {
    this.mHttp = http;
  }
  getHttp() {
    return this.mHttp;
  }

  // get all thuoc
  getAllThuoc(page: number): Observable<THUOC> {
    let url: string = this.mHost + APP_CMD.THUOC_GET_ALL + 'page=' + page;
    let thuoc: Array<THUOC> = [];
    return Observable.create((observer: Observer<any>) => {
      this.mHttp.get(url).subscribe((res: any) => {
        res.forEach(element => {
          thuoc.push(new THUOC(element));
        });
        observer.next(thuoc);
        observer.complete();
      })
    })
  }
  // get all thuoc
  getThuocId(id: number): Observable<THUOC> {
    let url: string = this.mHost + APP_CMD.THUOC_GET_ALL + 'id=' + id;
    let thuoc: Array<THUOC> = [];
    return Observable.create((observer: Observer<any>) => {
      this.mHttp.get(url).subscribe((res: any) => {
        res.forEach(element => {
          thuoc.push(new THUOC(element));
        });
        observer.next(thuoc);
        observer.complete();
      })
    })
  }
  // search by name
  searchThuoc(name: string): Observable<any> {
    let url: string = this.mHost + APP_CMD.THUOC_SEARCH + 'name=' + name;
    return Observable.create((observer: Observer<any>) => {
      this.mHttp.get(url).subscribe((res) => {
        observer.next(res);
        observer.complete();
      })
    })
  }
  // login
  login(username: string, password: string) {
    let url = this.mHost + "/user/login";
    let body = {
      "username": username,
      "password": password
    }
    return this.mHttp.post(url, body);
  }
  // get staff list
  getStaffs(): Observable<User> {
    let url: string = this.mHost + "/user/staff";
    let staffs:Array<User> = [];
    return Observable.create((observer: Observer<any>) => {
      this.mHttp.get(url).subscribe((res:any) => {
        res.staffs.forEach((item)=>{
          staffs.push(new User(item));
        })
        observer.next(staffs);
        observer.complete();
      })
    })
  }
  // connect to server
  connectToServer(): Observable<any> {
    let url: string = this.mHost + '/connection/checkconnection';
    return Observable.create((observer: Observer<any>) => {
      this.mHttp.get(url).subscribe((res) => {
        observer.next(res);
        observer.complete();
      }, e => {
        observer.error(e);
      })
    })
  }
}