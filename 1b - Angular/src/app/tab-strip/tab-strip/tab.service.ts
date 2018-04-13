import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import Tab from './tab';

@Injectable()
export class TabService
{

  constructor() { }

  /**
   * Liefert eine Auflistung von Registerkartenreitern.
   */
  public GetTabs(): Observable<Tab[]>
  {
    return of
      ([
        new Tab(1, "Sonne"),
        new Tab(2, "Genuss"),
        new Tab(3, "Urlaub")
      ]);
  }
}
