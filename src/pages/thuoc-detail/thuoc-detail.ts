import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THUOC } from '../../providers/app-class/thuoc';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
const keyPrices = ['priceIn','priceOut'];

/**
 * Generated class for the ThuocDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thuoc-detail',
  templateUrl: 'thuoc-detail.html',
})
export class ThuocDetailPage {
  mThuoc:THUOC;
  mForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private mAppModule:AppModuleProvider,private mFbCtrl:FormBuilder) {
    this.onLoadParams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThuocDetailPage');
  }
  onLoadParams(){
    if(this.navParams.data['thuoc']){
      this.mThuoc = this.navParams.get('thuoc');
      this.initForm();
    }
  }
  initForm(){
    this.doFormatPrice();
    this.mForm = this.mFbCtrl.group({
      name:new FormControl(this.mThuoc.getName(),[Validators.required]),
      registerNumber:new FormControl(this.mThuoc.getRegisterNumber(),[Validators.required]),
      lotNumber:new FormControl(this.mThuoc.getLotNumber(),[Validators.required]),
      dateOff:new FormControl(this.mThuoc.getDateOff(),[Validators.required]),
      unit:new FormControl(this.mThuoc.getUnit(),[Validators.required]),
      priceIn:new FormControl(this.mThuoc.getPriceIn(),[Validators.required]),
      priceOut:new FormControl(this.mThuoc.getPriceOut(),[Validators.required]),
      number:new FormControl(this.mThuoc.getNumber(),[Validators.required]),
      manufacture:new FormControl(this.mThuoc.getManufacture(),[Validators.required])
    });
  }
  doFormatPrice(){
    keyPrices.forEach((key)=>{
      this.mThuoc[key] = this.mAppModule.formatCurrency(this.mThuoc[key]);
    })
  }
  onKeyup(key:string){
    let price = this.mForm.get(key).value;
    let newPrice = this.mAppModule.formatCurrency(price);
    this.mForm.get(key).setValue(newPrice);
  }
}
