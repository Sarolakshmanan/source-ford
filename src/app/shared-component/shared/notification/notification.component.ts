import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(private notification: NzNotificationService) {}

  ngOnInit(): void {}

  createNotification(type: string, title: string, content: string): void {
    this.notification.create(type, title, content);
  }
}
