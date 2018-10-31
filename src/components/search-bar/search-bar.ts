import { Component,Input,Output,EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';
import { AppModuleProvider } from '../../providers/app-module/app-module';

const searchOptions = [{id:0,name:'Tên Thuốc'},{id:1,name:'Số Lô'},{id:2,name:'Số Đăng Kí'},{id:3,name:'Số Lô'}];
/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html',
  animations:[
    trigger('myvisiable',[
      state('void',style({opacity:0})),
      state('*',style({opacity:1})),
      transition('void=>*',animate("1s")),
      transition('*=>void',animate("2s"))
    ])
  ]
})
export class SearchBarComponent {
  @Input('query') mQuery:any;
  @Output() onSearch = new EventEmitter();
  mSearchQuery:any={};
  activeId:number = 0;
  lists:Array<any> = searchOptions;
  constructor(private mAppModule:AppModuleProvider) {
    console.log('Hello SearchBarComponent Component');
  }
  onClickOptions(i:number){
    this.activeId = i;
  }
  onSubmit(){
    this.mAppModule.serchThuoc(this.mSearchQuery.data).subscribe((res)=>{
      this.onSearch.emit(res);
    },e=>{
      this.onSearch.emit([]);
    })
    console.log('ok');
  }
}
