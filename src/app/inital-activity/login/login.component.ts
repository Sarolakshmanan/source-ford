import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/shared-component/shared/service/layout.service';
import { Title } from '@angular/platform-browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { LoginService } from './login.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //scope
  validateForm: FormGroup;
  confirmModal?: NzModalRef;
  isEmailPassword: boolean = false;
  factory_list: any = [];
  isShowPop: boolean = false;
  isEmailPop: boolean = false;
  // input to the security pin
  username: string;
  emailId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _layout: LayoutService,
    private _title: Title,
    private fb: FormBuilder,
    private modal: NzModalService,
    private service: LoginService,
    private message: NzMessageService
  ) {
    this._title.setTitle('Log In | Ausweg');
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard/live']);
    }
    this.screenLayout();
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  screenLayout() {
    this.route.data.subscribe((items) => {
      this._layout.screenPrivay = items.view;
      this._layout.setNotFoundPage(false);
    });
  }

  logoutReset(event: any) {
    this.validateForm.reset();
    this.isShowPop = false;
  }

  cancelRegistration(event: any): void {
    this.isEmailPop = false;
  }

  createMessage(mode: string, msg: string): void {
    if (mode == 'success') {
      this.message.success(msg, {
        nzDuration: 50,
      });
    } else {
      this.message.error(msg, {
        nzDuration: 5000,
      });
    }
  }

  activateRegister() {
    this.isEmailPop = true;
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.isEmailPassword = true;
      this.service.do_login(this.validateForm.value).subscribe(
        (items) => {
          this._layout.UserInfo = items;
          this.username = items.username;
          this.isShowPop = false;
          this.isEmailPassword = false;
          this.createMessage('success', items.msg);
          localStorage.setItem('token', items.token);
          localStorage.setItem('refresh_token', items.refresh_token);
          this.router.navigate(['/dashboard/insight']);
        },
        (error: any) => {
          this.isEmailPassword = false;
          this.isShowPop = false;
          this.createMessage('failure', error.error.msg);
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
