import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoaddingPage } from './loadding';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoaddingPage,
  ],
  imports: [
    IonicPageModule.forChild(LoaddingPage),
    ComponentsModule
  ],
})
export class LoaddingPageModule {}
