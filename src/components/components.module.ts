import { NgModule } from '@angular/core';
import { ProgressbarComponent } from './progressbar/progressbar';
import { SearchBarComponent } from './search-bar/search-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ProgressbarComponent,
    SearchBarComponent],
	imports: [IonicModule],
	exports: [ProgressbarComponent,
    SearchBarComponent]
})
export class ComponentsModule {}
