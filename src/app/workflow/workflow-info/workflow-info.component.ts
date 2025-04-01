import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/shared-component/shared/service/layout.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-workflow-info',
  templateUrl: './workflow-info.component.html',
  styleUrls: ['./workflow-info.component.scss'],
})
export class WorkflowInfoComponent implements OnInit {
  //scope
  

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private _layout: LayoutService
  ) {
    this.title.setTitle('Workflow Design | ZOGX');
  }

  ngOnInit(): void {
    this.screenLayout();
  }

  screenLayout() {
    this.route.data.subscribe((items) => {
      this._layout.screenPrivay = items.view;
      this._layout.setNotFoundPage(false);
    });
  }
}
