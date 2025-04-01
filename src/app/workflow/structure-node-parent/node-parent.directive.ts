import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[workFlowContainer]'
})

export class WorkFlowParentContainerDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}
