import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from './modal.service';
import { OtpService } from 'src/app/inital-activity/otp-config/otp.service';

@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.scss'],
})
export class ModalServiceComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private _modal: ModalService, private otp_service: OtpService) {}

  ngOnInit(): void {
    this.show();
    this.logout();
  }

  show() {
    this._modal.popupStatus().subscribe((items: any) => {
      this.isVisible = items.data;
    });
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  logout() {
    this.otp_service.popRemover().subscribe((items: any) => {
      if (items['status'] == 'success') {
        this.handleCancel();
      }
    });
  }
}
