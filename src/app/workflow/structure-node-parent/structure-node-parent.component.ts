import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  Output,
  EventEmitter,
} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { jsPlumb } from 'jsplumb';
// node formation import
import {
  Node,
  StructureNodeChildComponent,
} from '../structure-node-child/structure-node-child.component';
import { WorkFlowParentContainerDirective } from '../structure-node-parent/node-parent.directive';

@Component({
  selector: 'app-structure-node-parent',
  templateUrl: './structure-node-parent.component.html',
  styleUrls: ['./structure-node-parent.component.scss'],
})
export class StructureNodeParentComponent implements OnInit {
  //scope
  eligibleFirstNodes: string[] = ['Unit-I'];
  @Input() nodeParentId: string;
  jsPlumbInstance: any;
  @ViewChild(WorkFlowParentContainerDirective)
  workflowPlaceholder: WorkFlowParentContainerDirective;
  @Output() newTabOpen = new EventEmitter();

  constructor(
    private notification: NzNotificationService,
    private _resolver: ComponentFactoryResolver
  ) {
    this.jsPlumbInstance = jsPlumb.getInstance();
  }

  ngOnInit(): void {
    this.jsPlumbInstance.setContainer(this.nodeParentId);
  }

  addNode(details: any) {
    const { id, name, top, left, enabled, creatorId, image } = details;
    const node = {
      id,
      name,
      top,
      left,
      image,
      uuids: {
        left: `${id}-left`,
        right: `${id}-right`,
      },
      enabled: enabled,
      nodeParentId: creatorId,
    };
    this.createNode(node);
  }

  // creating the node
  createNode(node: Node) {
    const nodeFactory = this._resolver.resolveComponentFactory(
      StructureNodeChildComponent
    );
    const viewContainerRef = this.workflowPlaceholder.viewContainer;
    const nodeRef = viewContainerRef.createComponent(nodeFactory);
    const nodeInstance: StructureNodeChildComponent =
      nodeRef.instance as StructureNodeChildComponent;
    nodeInstance.node = node;
    nodeInstance.jsPlumbInstance = this.jsPlumbInstance;
    nodeInstance.newTabOpen.subscribe(({ info }) => {
      this.newTabOpen.emit({ info });
    });
  }
}
