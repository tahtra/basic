import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoutesList} from '../../../common/lists/routes.list';
import {HeaderService} from '../../../common/services/header.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  routesList = RoutesList;

  constructor(public headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.show.next('none') ;
  }

  ngOnDestroy() {
    this.headerService.show.next('flex');
  }
}
