import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

export interface Node {
  id: string;
  top?: number;
  left?: number;
  image: any;
  name: any;
  uuids: any;
  nodeParentId?: string;
  enabled: boolean;
}

@Component({
  selector: 'app-structure-node-child',
  templateUrl: './structure-node-child.component.html',
  styleUrls: ['./structure-node-child.component.scss'],
})
export class StructureNodeChildComponent implements OnInit, AfterViewInit {
  //scope
  @Input() node: Node;
  @Input() jsPlumbInstance: any;
  @Output() newTabOpen = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const { id, nodeParentId } = this.node;
    const dropOptions = {
      tolerance: 'touch',
      hoverClass: 'dropHover',
      activeClass: 'dragActive',
    };
    const connectorStyleConfig = {
      connectorStyle: {
        stroke: '#000000',
        strokeWidth: 3,
      },
      connector: [
        'Bezier',
        {
          curviness: 1,
        },
      ],
      connectorOverlays: [
        [
          'Label',
          {
            location: 1,
          },
        ],
      ],
    };
    const rightPointStyleConfig = {
      paintStyle: {
        fill: '#000000',
      },
    };
    const leftPointStyleConfig = {
      paintStyle: {
        fill: '#ffcb3a',
      },
    };
    let rightPoint = {
      endpoint: [
        'Dot',
        {
          radius: 8,
        },
      ],
      ...connectorStyleConfig,
      ...rightPointStyleConfig,
      isSource: true,
      isTarget: false,
      maxConnections: 1,
      scope: nodeParentId,
      connectionsDetachable: true,
      dropOptions,
    };

    let leftPoint = {
      ...leftPointStyleConfig,
      endpoint: [
        'Dot',
        {
          radius: 4,
        },
      ],
      isSource: false,
      isTarget: true,
      maxConnections: 1,
      scope: nodeParentId,
      connectionsDetachable: true,
      dropOptions,
    };
    let showLeftPoint = true,
      showRightPoint = true;
    if (showLeftPoint) {
      this.jsPlumbInstance.addEndpoint(
        id,
        {
          anchor: 'Left',
          uuid: this.node.uuids.left,
        },
        leftPoint
      );
    }
    if (showRightPoint) {
      this.jsPlumbInstance.addEndpoint(
        id,
        {
          anchor: 'Right',
          uuid: this.node.uuids.right,
        },
        rightPoint
      );
    }
    this.jsPlumbInstance.draggable(id, {
      getConstrainingRectangle: () => [3000, 3000],
      stop: (params: any) => {
        const prevNodeCoords = {
          left: this.node.left,
          top: this.node.top,
        };
        this.node.left = params.finalPos[0];
        this.node.top = params.finalPos[1];
      },
      containment: true,
    });
  }

  onDragOver(event: any) {}

  removeNode(event: any, ndoe: any) {}

  StatusMarker(event: any, node: any) {}

  respectiveDicision(event: any, node: any) {
    this.newTabOpen.emit({
      info: node,
    });
  }
}
