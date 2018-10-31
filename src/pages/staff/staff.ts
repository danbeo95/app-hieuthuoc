import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { User } from '../../providers/app-class/user';
/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  mStaffLists:Array<User> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mAppModule:AppModuleProvider) {
  }

  ionViewDidLoad() {
    this.getStaffLists();
    console.log('ionViewDidLoad StaffPage');
  }
  getStaffLists(){
    this.mAppModule.getStaffLists().subscribe((res)=>{
      this.mStaffLists = this.mStaffLists.concat(res);
    })
  }
}
