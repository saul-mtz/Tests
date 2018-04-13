import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import Item from "./item";



@Injectable()
export class ItemService
{

  constructor() { }

  /**
   * Liefert das angegebene Inhaltselement.
   * @param itemId:number Id des Anzuzeigenden Elements.
   */
  public GetItem(itemId: number): Observable<Item>
  {
    return of(new Item(itemId, `assets/${itemId}.jpg`, `Text ${itemId}`));
  }
}
