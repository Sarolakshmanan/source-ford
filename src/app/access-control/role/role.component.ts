import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { LayoutService } from "src/app/shared-component/shared/service/layout.service";
import { Title } from "@angular/platform-browser";
import { RoleService } from "./role.service";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzFormatEmitEvent } from "ng-zorro-antd/tree";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
  //scope
  searchText: any;
  toggleEventCreate: boolean = false;
  listOfColumn: any = [
    "Action",
    "Role Name",
    "Status",
    "Created By",
    "Created Date",
    "Last Updated By",
    "Last Updated Date",
  ];
  role_data: any = [];
  isEdit: boolean = false;
  validateForm: FormGroup;
  currentEdit: any = {};
  loader: boolean = false;
  menu_info: any = {};
  searchValue = "";
  readInterminate: boolean = false;
  writeIndeterminate: boolean = false;
  nodeInfo: any = {};
  access_type: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private _layout: LayoutService,
    private title: Title,
    private _service: RoleService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private _cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.title.setTitle("Roles | Ausweg");
  }

  ngOnInit(): void {
    this.screenLayout();
    // forms implemented
    this.validateForm = this.fb.group({
      role_name: [{ value: "", disabled: this.isEdit }, [Validators.required]],
      status: ["Active", [Validators.required]],
    });
  }

  screenLayout() {
    this.route.data.subscribe((items) => {
      this._layout.screenPrivay = items.view;
      this._layout.setNotFoundPage(false);
      this.gatheringDetails();
    });
  }

  gatheringDetails() {
    this.loader = true;
    this._service.get_details().subscribe(
      (items) => {
        if (items) {
          this.role_data = items.data;
          this.menu_info = items.menu_data;
          this.access_type = items.cred == "write" ? false : true;
          this.formationNode("clear");
          this.loader = false;
        }
      },
      (error: any) => {
        this.loader = false;
        if (error.status == 403) {
          this.router.navigate(["/un-authorize"]);
        }
      }
    );
  }

  formationNode(mode: string) {
    if (mode == "clear") {
      this.nodeInfo = {};
    }
    for (let val of this.menu_info) {
      if (val.children.length != 0) {
        if (this.nodeInfo[val["title"]] == undefined) {
          this.nodeInfo[val["title"]] = {
            read: false,
            write: false,
            iter_read: false,
            iter_write: false,
          };
        }
        for (let val_inner of val.children) {
          if (this.nodeInfo[val_inner["title"]] == undefined) {
            this.nodeInfo[val_inner["title"]] = {
              read: false,
              write: false,
              parent_name: val_inner["parent_name"],
            };
          }
        }
      } else {
        if (this.nodeInfo[val["title"]] == undefined) {
          this.nodeInfo[val["title"]] = {
            read: false,
            write: false,
            iter_read: false,
            iter_write: false,
          };
        }
      }
    }
  }

  toggleEnv() {
    this.toggleEventCreate = !this.toggleEventCreate;
    this.resetForm();
    this.gatheringDetails();
  }

  editData(data: any) {
    this.toggleEventCreate = !this.toggleEventCreate;
    this.isEdit = true;
    this.validateForm.controls.role_name.disable();
    this.validateForm.controls["role_name"].setValue(data["role_name"]);
    this.validateForm.controls["status"].setValue(data["status"]);
    this.currentEdit = data;
    this.nodeInfo = JSON.parse(data["role_summary"]);
    this.formationNode("alter");
  }

  inDelete(data: any, mode: string) {
    if (mode == "Delete") {
      data["status"] = "Delete";
    } else {
      data["status"] = data["status"] == "Active" ? "Inactive" : "Active";
    }
    this.validateForm.patchValue(data);
    this.currentEdit = data;
    this.UpdateForm("internal");
  }

  createMessage(mode: string, msg: string): void {
    if (mode == "success") {
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
      this._service
        .post_details(this.validateForm.value, this.nodeInfo)
        .subscribe(
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
        .put_details(
          this.validateForm.value,
          this.currentEdit.id,
          this.nodeInfo
        )
        .subscribe(
          (items: any) => {
            this.createMessage(items.status, items.msg);
            this.loader = false;
            if (mode == "internal") {
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

  resetForm() {
    this.isEdit = false;
    this.validateForm.reset();
    this.validateForm.controls["status"].setValue("Active");
    this.currentEdit = {};
    this.formationNode("clear");
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  updateAllChecked(mode: string, selectedNode: string): void {
    if (mode == "write") {
      this.nodeInfo[selectedNode]["read"] = false;
    }
    for (let val of this.menu_info) {
      if (selectedNode == val["title"]) {
        for (let val_inner of val.children) {
          if (mode == "write") {
            this.nodeInfo[val_inner["title"]]["read"] = false;
          }
          this.nodeInfo[val_inner["title"]][mode] =
            this.nodeInfo[selectedNode][mode];
        }
      }
    }
  }

  updateSingleChecked(mode: string, value: string): void {
    if (this.nodeInfo[value]["parent_name"] != undefined) {
      this.nodeInfo[this.nodeInfo[value]["parent_name"]][`iter_${mode}`] =
        this.nodeInfo[value][mode];
    }
  }
}
