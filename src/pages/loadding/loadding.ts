import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
/**
 * Generated class for the LoaddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadding',
  templateUrl: 'loadding.html',
})
export class LoaddingPage {
  mProgerss: number = 0;
  mIsload: boolean = false;
  interval: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private mAppModule: AppModuleProvider) {
    this.navCtrl.setRoot(HomePage);

  }

  ionViewDidLoad() {
    // this.startConnect();
  }
  startConnect() {
    let interval = setInterval(() => {
      this.mProgerss = this.mProgerss + 1;
      if (this.mProgerss == 30) {
        this.doConnectServer();
        clearInterval(interval);
      }
    }, 100);
  }
  doConnectServer() {
    this.mAppModule.checkConnection().subscribe((res) => {
      this.onConnectSuccess(res);
    }, e => {
      this.onConnectFail();
    })
  }
  onConnectSuccess(res) {
    if (res.status == 1) {
      this.mIsload = true;
      let interval = setInterval(() => {
        this.mProgerss = this.mProgerss + 1;
        if (this.mProgerss == 100) {
          this.navCtrl.setRoot("LoginPage");
          clearInterval(interval);
        }
      }, 50)
    }
  }
  onConnectFail() {
    this.mAppModule.showAlertConnectFail((id) => {
      if (id == 1) {
        this.mProgerss = 1;
        this.mIsload = false;
        this.doConnectServer();
      }
    });
  }
}
