import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/app-class/user';
import { AppModule } from '../../app/app.module';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mUser: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private mAppModule: AppModuleProvider) {
    this.mUser = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    if (this.validForm()) {
      let username: string = this.mUser.username;
      let password: string = this.mUser.password;
      this.mAppModule.showLoading();
      this.mAppModule.login(username, password).subscribe((res) => {
        this.onLoginSuccess(res);
        this.mAppModule.hideLoading();
      }, e => {
        this.mAppModule.hideLoading();
        this.mAppModule.showToastNoConnect();
      })
    }
  }
  onLoginSuccess(res) {
    let status = res.status;
    if (status == 1) {
      this.navCtrl.setRoot(HomePage);
    }
    else {
    }
    this.mAppModule.showToast(res.mess);

  }
  validForm() {
    if (this.mUser.username.length < 4) {
      this.mAppModule.showToast('Tên đăng nhập phải có ít nhất 6 kí tự !');
      return false;
    }
    else if (this.mUser.password.length < 4) {
      this.mAppModule.showToast('Mật khẩu nhập phải có ít nhất 6 kí tự !');
      return false;
    }
    else {
      return true;
    }
  }
}
