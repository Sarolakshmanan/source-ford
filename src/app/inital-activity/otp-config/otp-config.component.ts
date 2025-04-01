import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { OtpService } from './otp.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { LayoutService } from '../../shared-component/shared/service/layout.service';

@Component({
  selector: 'app-otp-config',
  templateUrl: './otp-config.component.html',
  styleUrls: ['./otp-config.component.scss'],
})
export class OtpConfigComponent implements OnInit, OnChanges {
  // inputs from the login screen
  @Input() username: string;
  @Input() emailId: string;
  @Input() factory_list: any = [];
  @Output() logoutReset = new EventEmitter<boolean>();
  securityPin: any = {};
  isVisible: boolean = false;
  isOtpLoading: boolean = false;
  otp_verify: boolean;
  navigateUrl: string;
  newPassword: boolean = false;
  @Input() isShowPop: boolean;
  environment: any = {};

  // db connection
  PouchDB = require('pouchdb').default;

  constructor(
    private otp_service: OtpService,
    private message: NzMessageService,
    private router: Router,
    private _layout: LayoutService
  ) {}

  ngOnInit(): void {}

  verifyPin(event: any) {
    for (let val of ['one', 'two', 'three', 'four']) {
      if (this.securityPin[val] == undefined || this.securityPin[val] == '') {
        this.message.error('Please Fill the otp', { nzDuration: 1000 });
        return;
      }
    }

    this.isOtpLoading = true;
    this.otp_service
      .do_pin({
        otp: Object.values(this.securityPin).join(''),
        load_id: this._layout.UserInfo["id"]
      })
      .subscribe(
        (items) => {
          this.isOtpLoading = false;
          this.otp_verify = false;
          this.navigateUrl = items.data.url;
          this.message.success('Pin Confirmed Successfully', {
            nzDuration: 1500,
          });
          localStorage.clear();
          // adding the current localstorage
          localStorage.setItem('token', items.data.token_access); 
          localStorage.setItem('maskId', items.data.id);
          if (items.data.mode) {
            this.newPassword = true;
          } else {
            this.router.navigate([items.data.url]);
            this._layout.setPageInfo(true);
          }
        },
        (error: any) => {
          this.isOtpLoading = false;
          this.message.error(error.error.message, { nzDuration: 1500 });
        }
      );
  }
  

  ngOnChanges(): void {
    this.securityPin = {};
    if (this.isShowPop) {
      this.isVisible = true;
      this.otp_verify = true;
      this.newPassword = false;
      this.environment = '';
    } else {
      this.isVisible = false;
    }
  }

  proceedIn() {
    this.router.navigate([this.navigateUrl]);
    this._layout.setPageInfo(true);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  logout() {
    this.otp_service.logoutConfirm();
    this.logoutReset.emit(true);
  }
}
