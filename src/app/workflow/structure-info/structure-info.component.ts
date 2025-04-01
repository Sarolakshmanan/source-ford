import { Component, Input, OnInit, ViewChild, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/shared-component/shared/service/layout.service';
import { Title } from '@angular/platform-browser';
import { Factory } from '../constants';
import { WorkflowService } from '../workflow-info/workflow.service';

@Component({
  selector: 'app-structure-info',
  templateUrl: './structure-info.component.html',
  styleUrls: ['./structure-info.component.scss'],
})
export class StructureInfoComponent implements OnInit {
  //scope
  factoryList: any = Factory;
  nodeCreatedCount: number = 0;
  // defining top and left by default
  top: number = 0;
  left: number = 0;
  @Input() NodeParentId: string;
  canvasId: string;
  // inheritance
  @ViewChild('workFlowCreator') workFlowCreator: any;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private _layout: LayoutService,
    private _ws: WorkflowService
  ) {
    // this.title.setTitle('Work Flow | ZOGX');
  }

  ngOnInit(): void {
    this.canvasId = this.NodeParentId;
  }

  // node dragging
  onNodeClick(event: any, workflow: any) {
    this.nodeCreatedCount++;
    this.top = this.top + 20;
    this.left = this.left + 40;
    this.createNode({
      id: `${this.canvasId}-${workflow.id}-${this.nodeCreatedCount}`,
      top: this.top,
      left: this.left,
      type: 'fresh',
      name: workflow.name,
      enabled: true,
      image: workflow.img,
    });
  }

  onNodeDrag(ev: any, workflow: any) {
    this.nodeCreatedCount++;
    this.top = this.top + 20;
    this.left = this.left + 40;
    this.createNode({
      id: `${this.canvasId}-${workflow.id}-${this.nodeCreatedCount}`,
      top: this.top,
      left: this.left,
      type: 'fresh',
      name: workflow.name,
      enabled: true,
      image: workflow.img,
    });
  }

  createNode({
    id,
    name,
    type,
    top,
    left,
    enabled,
    image,
  }: {
    id?: string;
    name?: string;
    type?: string;
    top?: number;
    left?: number;
    enabled?: boolean;
    image: string;
  }) {
    this.workFlowCreator.addNode({
      id,
      name,
      type,
      top,
      left,
      creatorId: this.canvasId,
      enabled: enabled,
      image: image,
    });
  }

  openingUnits(data: any): void {
    this._ws.modeOpen(data);
  }
}
