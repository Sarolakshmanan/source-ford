import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Input,
} from '@angular/core';
import { LayoutService } from './service/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit, OnChanges {
  constructor(private _layout: LayoutService, private route: Router) {}

  //scope
  notFound: boolean = this._layout.pageNotFoundMode;
  screenPrivacy: string = this._layout.screenPrivay;
  isCollapsed: any;
  menuLabel: any;
  userdata: any;
  factoryInfo: any;
  sideMenu: any;

  ngOnInit(): void {
    this.toggleStatusTrigger();
    this.notFoundPage();
    this.layoutApi();
  }

  layoutApi() {
    this.drop_menu();
    this.side_menu();
  }

  side_menu() {
    let url = this.route.url;
    this._layout.sideMenuDressUp(url).subscribe(
      (items: any) => {
        this.sideMenu = items.data;
      },
      (error: any) => {}
    );
  }

  drop_menu() {
    this._layout.menuDressUp().subscribe(
      (items: any) => {
        this.menuLabel = items.label;
        this.userdata = items.userInfo;
        this.factoryInfo = items.factory_list;
      },
      (error: any) => {
        if (error.status == 401) {
        }
      }
    );
  }

  gatheringParentClick(value: any) {
    console.log(value);
  }

  ngOnChanges(): void {}

  toggleStatusTrigger() {
    this.isCollapsed = this._layout.getToggleStatus();
  }

  routerNavigation(mode: string) {
    this.route.navigateByUrl(mode);
  }

  notFoundPage() {
    this._layout.getModePagenotFound().subscribe((items) => {
      if (items['status'] == 'success') {
        this.notFound = items['value'];
        this.screenPrivacy = items['layout'];
        this.layoutApi();
      }
    });
  }
}
