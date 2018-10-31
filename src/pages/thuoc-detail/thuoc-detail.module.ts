import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThuocDetailPage } from './thuoc-detail';

@NgModule({
  declarations: [
    ThuocDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ThuocDetailPage),
  ],
})
export class ThuocDetailPageModule {}
