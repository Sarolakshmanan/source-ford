import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { RegisterService } from './register.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { LayoutService } from '../../shared-component/shared/service/layout.service';
import { Title } from '@angular/platform-browser';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // inputs from the login screen
  isVisible: boolean = false;
  @Input() isShowPop: boolean;
  @Output() cancel = new EventEmitter<boolean>();
  validateForm: FormGroup;
  loader: boolean = false;
  fileList: NzUploadFile[] = [];

  constructor(
    private _service: RegisterService,
    private message: NzMessageService,
    private router: Router,
    private fb: FormBuilder,
    private _layout: LayoutService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email_id: [{ value: '', disabled: false }, [Validators.required]],
      first_name: [{ value: '', disabled: false }, [Validators.required]],
      last_name: [{ value: '', disabled: false }, [Validators.required]],
      phone_number: [{ value: '', disabled: false }, [Validators.required]],
      aadhar_number: [{ value: '', disabled: false }, [Validators.required]],
      mode: [{ value: '', disabled: false }, [Validators.required]],
      institution_name: [
        {
          value: '',
          disabled: false,
        },
        [Validators.required],
      ],
      status: [{ value: 'Active', disabled: true }],
    });
  }

  ngOnChanges(): void {
    if (this.isShowPop) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  clearingRegister() {
    this.validateForm.reset();
    this.fileList = [];
    this.cancel.emit(true);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    if (this.fileList.length < 1) {
      this.fileList = this.fileList.concat(file);
    } else {
      this.removingFiles('');
    }
    return false;
  };

  createMessage(mode: string, msg: string): void {
    if (mode == 'success') {
      this.message.success(msg, {
        nzDuration: 5000,
      });
    } else {
      this.message.error(msg, {
        nzDuration: 5000,
      });
    }
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.loader = true;
      const formData = new FormData();
      this.fileList.forEach((file: any) => {
        formData.append('files[]', file);
      });
      for (let val in this.validateForm.value) {
        formData.append(val, this.validateForm.value[val]);
      }
      this._service.post_details(formData).subscribe(
        (items: any) => {
          this.createMessage(items.status, items.msg);
          this.loader = false;
        },
        (error: any) => {
          this.createMessage(error.error.status, error.error.msg);
          this.loader = false;
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

  modeChanger(): void {
    if (this.validateForm.value.mode != 'Institution') {
      this.validateForm.controls.institution_name.disable();
      this.validateForm.controls.institution_address.disable();
    } else {
      this.validateForm.controls.institution_name.enable();
      this.validateForm.controls.institution_address.enable();
    }
  }

  removingFiles(event: any): void {
    this.createMessage('error', 'More than one file is restricted');
  }
}
