import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { LoadDataController } from '../app-loaddata/app-loaddata';
import { AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {
  mLoadDataController: LoadDataController = null;
  mLoading = null;
  constructor(public http: HttpClient, private mAlertCtrl: AlertController,
    private mLoadingCtrl: LoadingController, private mCurrencyCtrl: CurrencyPipe,
    private mNumberCtrl: DecimalPipe, private mToastCtrl: ToastController) {
    this.mLoadDataController = new LoadDataController();
    this.mLoadDataController.setHttp(this.http);
    console.log('Hello AppModuleProvider Provider');
  }
  // check connection
  checkConnection() {
    return this.mLoadDataController.connectToServer();
  }
  // get thuoc
  getThuoc(page: number) {
    return this.mLoadDataController.getAllThuoc(page);
  }
  // search thuoc
  serchThuoc(name: string) {
    return this.mLoadDataController.searchThuoc(name);
  }
  // login
  login(username: string, password: string) {
    return this.mLoadDataController.login(username, password);
  }
  // get staff list
  getStaffLists(){
    return this.mLoadDataController.getStaffs();
  }
  showAlertConnectFail(callback?: any) {
    this.mAlertCtrl.create({
      subTitle: 'Thông báo',
      message: 'Kết nối đến server thất bại,thử laị !',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            callback(0);
          }
        },
        {
          text: 'Thử Lại',
          handler: () => {
            callback(1)
          }
        }
      ]
    }).present();
  }
  formatCurrency(value) {
    value = value.toString().split(',').join('');
    return this.mNumberCtrl.transform(value);
  }
  showLoading() {
    this.mLoading = this.mLoadingCtrl.create({});
    this.mLoading.present();
  }
  hideLoading() {
    if (this.mLoading !== null) {
      this.mLoading.dismiss();
    }
  }
  showToast(mess: string) {
    this.mToastCtrl.create({
      message: mess,
      duration: 3000
    }).present();
  }
  showToastNoConnect() {
    this.mToastCtrl.create({
      message: 'Không có kết nối.Kiểm tra kết nối mạng !',
      duration: 3000
    }).present();
  }
}
