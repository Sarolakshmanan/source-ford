import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-workflow-general',
  templateUrl: './workflow-general.component.html',
  styleUrls: ['./workflow-general.component.scss'],
})
export class WorkflowGeneralComponent implements OnInit {
  //scope
  visible: boolean = false;
  generalHeader: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generalHeader = this.fb.group({
      workflow_name: [null, [Validators.required]],
      status: ['Active', [Validators.required]],
      newFlow: [true, [Validators.required]],
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // submit and update
  manageCreateUpdate(): void {}
}
