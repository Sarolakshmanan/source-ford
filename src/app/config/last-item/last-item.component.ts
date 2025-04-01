import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/shared-component/shared/service/layout.service';
import { Title } from '@angular/platform-browser';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LastItemService } from './last-item.service';
@Component({
  selector: 'app-last-item',
  templateUrl: './last-item.component.html',
  styleUrls: ['./last-item.component.scss'],
})
export class LastItemComponent implements OnInit {
  //scope
  searchText: any;
  toggleEventCreate: boolean = false;
  listOfColumn: any = [
    'Category',
    'Name',
    'Item No',
    'Item Name',
    'Raised By',
    'Created Date',
    'Last Updated By',
    'Last Updated Date',
  ];
  data: any = [];
  isEdit: boolean = false;
  validateForm: FormGroup;
  currentEdit: any = {};
  loader: boolean = false;
  passwordVisible = false;
  access_type: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _layout: LayoutService,
    private title: Title,
    private router: Router,
    private _service: LastItemService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private _cdr: ChangeDetectorRef
  ) {
    this.title.setTitle('Category | ADW/STW');
  }

  ngOnInit(): void {
    this.screenLayout();
    this.gatheringDetails();
    // forms implemented
    this.validateForm = this.fb.group({
      email_id: [{ value: '', disabled: true }, [Validators.required]],
      status: [{ value: '' }, [Validators.required]],
      password: [{ value: '' }, [Validators.required]],
    });
  }

  screenLayout() {
    this.route.data.subscribe((items) => {
      this._layout.screenPrivay = items.view;
      this._layout.setNotFoundPage(false);
    });
  }

  gatheringDetails() {
    this.loader = true;
    this._service.get_details().subscribe(
      (items) => {
        if (items) {
          this.data = items.data;
          this.access_type = items.cred == 'write' ? false : true;
          this.loader = false;
        }
      },
      (error: any) => {
        this.loader = false;
        if (error.status == 403) {
          this.router.navigate(['/un-authorize']);
        }
      }
    );
  }

  toggleEnv() {
    this.toggleEventCreate = !this.toggleEventCreate;
    this.resetForm();
    if (!this.toggleEventCreate) {
      this.gatheringDetails();
    }
  }

  editData(data: any) {
    this.toggleEventCreate = !this.toggleEventCreate;
    this.isEdit = true;
    this.validateForm.controls.name.disable();
    this.validateForm.patchValue(data);
    this.currentEdit = data;
  }

  inDelete(data: any, mode: string) {
    if (mode == 'Delete') {
      data['status'] = 'Delete';
    } else {
      data['status'] = data['status'] == 'Active' ? 'Inactive' : 'Active';
    }
    this.validateForm.patchValue(data);
    this.currentEdit = data;
    this.UpdateForm('internal');
  }

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
      this._service.post_details(this.validateForm.value).subscribe(
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

  UpdateForm(mode: string) {
    if (this.validateForm.valid) {
      this.loader = true;
      this._service
        .put_details(this.validateForm.value, this.currentEdit.id)
        .subscribe(
          (items: any) => {
            this.createMessage(items.status, items.msg);
            this.loader = false;
            if (mode == 'internal') {
              this.gatheringDetails();
            }
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

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  resetForm() {
    this.isEdit = false;
    this.validateForm.reset();
    //this.validateForm.controls.name.enable();
    this.validateForm.controls['status'].setValue('Active');
    this.currentEdit = {};
  }
}
