import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderActivity();
  }

  loaderActivity() {
    this._loader.retrieveStatusLoader().subscribe((items) => {
      if (items['status'] == 'success') {
        if (items['value'] == true) {
          this.startLoading();
        } else {
          this.stopLoading();
        }
      }
    });
  }

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }
}
