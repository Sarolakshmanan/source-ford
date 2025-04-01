import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[workFlowTab]'
})

export class WorkFlowParentTabContainerDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}