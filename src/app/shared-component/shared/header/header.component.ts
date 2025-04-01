import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { SharedComponent } from '../shared.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _layout: LayoutService,
    private _slider: SharedComponent,
    private _modal: NzModalService
  ) {}

  //scope
  isCollapsed: any;
  environment: string;
  apiConnection: boolean = this._layout.apiConnection;
  profilePic: any = this._layout.profilePicture;
  visible = false;
  userName: string;
  placement: NzDrawerPlacement = 'right';
  // inputs from shared container
  @Input() menu_list: any;
  @Input() userInfo: any;

  ngOnInit(): void {
    this.isCollapsed = this._layout.getToggleStatus();
  }

  NotificationOpen(): void {
    this.visible = true;
  }

  ngOnChanges(): void {
    if (this.userInfo != undefined) {
      this.userName = this.userInfo['full_name'];
      this.profilePic = `${environment.serverConnection}/profile/${this.userInfo['_id']}.jpg`;
    }
  }

  Notificationclose(): void {
    this.visible = false;
  }

  toggleslider() {
    this.isCollapsed = this._layout.togglingSlider();
    this._slider.toggleStatusTrigger();
  }

  apiSessionReset() {
    this._modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOkText: 'Continue',
      nzOnOk: () => console.log('OK'),
      nzCancelText: this.apiConnection ? 'Cancel' : 'Logout',
      nzOnCancel: () => {
        console.log('Cancel');
      },
    });
  }
}
