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
import { AlarmTransactionService } from './alarm-transaction.service';

@Component({
  selector: 'app-alarm-transaction',
  templateUrl: './alarm-transaction.component.html',
  styleUrls: ['./alarm-transaction.component.scss']
})
export class AlarmTransactionComponent implements OnInit {
  //scope
  searchText: any;
  toggleEventCreate: boolean = false;
  listOfColumn: any = [
    'Alarm Name',
    'Alarm Time',
    'Status',
    'Created By',
    'Created Date',
    'Last Updated By',
    'Last Updated Date',
  ];
  data: any = [];
  isEdit: boolean = false;
  validateForm: FormGroup;
  currentEdit: any = {};
  loader: boolean = false;
  access_type: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _layout: LayoutService,
    private title: Title,
    private router: Router,
    private _service: AlarmTransactionService,
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
      category_id: [{ value: '', disabled: true }, [Validators.required]],
      status: [{ value: '' }, [Validators.required]],
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
}
