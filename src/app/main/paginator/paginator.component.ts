import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass'],
})
export class PaginatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pageEvent($event: any): void {
    console.log($event);
  }
}
