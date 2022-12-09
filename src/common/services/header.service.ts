import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  show: BehaviorSubject<any> = new BehaviorSubject<any>('flex')

  constructor() { }
}
