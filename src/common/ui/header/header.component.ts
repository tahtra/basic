import {Component, HostBinding} from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostBinding('style.display')

  @HostBinding('class') class = 'header mat-elevation-z6';

  public header: 'flex' | 'none' = 'flex';

  constructor(public headerService: HeaderService) {
    headerService.show.subscribe(data => {
      this.header = data;
    })
    console.log('constructor')
  }
}
