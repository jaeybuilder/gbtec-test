import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { config } from './config';
import { Config } from './config/config';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gbtech';
  public config: Config;
  private _unsubscribeAll: Subject<any>;
  constructor(private configService: ConfigService) {
    this.config = config;
    this._unsubscribeAll = new Subject();
    this.configService
      .getConfig()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => (this.config = config));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._unsubscribeAll.complete();
  }
}
