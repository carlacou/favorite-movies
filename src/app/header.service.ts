/*import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  [x: string]: any;

  headerData = new BehaviorSubject<HeaderData>({
    title: 'Página inicial',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }
  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}*/
