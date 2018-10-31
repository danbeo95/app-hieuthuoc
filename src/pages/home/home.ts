import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { THUOC } from '../../providers/app-class/thuoc';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mThuocLists: Array<THUOC> = [];
  mPage: number = 0;
  mScrollTop: number = 0;
  isShowSearchBar: boolean;
  isSearch:boolean=false;
  @ViewChild(Content) mContent: Content;
  constructor(public navCtrl: NavController, private mAppModule: AppModuleProvider, private mZoneCtrl: NgZone) {
    this.getAllThuoc();
  }
  ionViewDidLoad() {
    this.onScroll();
  }
  getAllThuoc() {
    this.mAppModule.getThuoc(this.mPage).subscribe((res) => {
      this.mThuocLists = this.mThuocLists.concat(res);
      console.log(res);
    });
  }
  goToDetail(item:THUOC){
    this.navCtrl.push("ThuocDetailPage",{thuoc:item});
  }
  doInfinite(infinite) {
    this.mPage = this.mPage + 1;
    this.mAppModule.getThuoc(this.mPage).subscribe((res) => {
      this.mThuocLists = this.mThuocLists.concat(res);
      infinite.complete();
      console.log(res);
    });
  }
  onScroll() {
    this.mContent.ionScrollEnd.subscribe(() => {
      this.mZoneCtrl.run(() => {
        let scrollTop = this.mContent.scrollTop;
        if (scrollTop>this.mScrollTop){
          this.isShowSearchBar = true;
        }
        else{
          this.isShowSearchBar = false;
          this.mContent.resize();
        }
      })
    });
    this.mContent.ionScrollStart.subscribe(() => {
      this.mZoneCtrl.run(() => {
        this.mScrollTop = this.mContent.scrollTop;
      })
    })
  }
  onSearch(data){
    this.isShowSearchBar = true;
    this.mThuocLists = data;
  }
}
