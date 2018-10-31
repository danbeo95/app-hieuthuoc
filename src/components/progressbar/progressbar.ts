import { Component,Input,Output,EventEmitter, OnChanges } from '@angular/core';

/**
 * Generated class for the ProgressbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent implements OnChanges {
  @Input('progress') progress;
  @Input('isLoaded') isLoaded;

  @Output() onClick = new EventEmitter();

  text: string = 'Đang kết nối vào hệ thống...';

  constructor() {
  
  }
  ngOnChanges(){
    if(this.isLoaded){
      this.text = 'Kết nối vào hệ thống thành công .. !';
    }
  }
  click(){
    this.onClick.emit({data:'heelo'});
  }
}
