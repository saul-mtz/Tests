import { Component, Input } from '@angular/core';

import Item from './item';
import { ItemService } from './item.service';



@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent
{
  public item: Item;

  public noImage: boolean;



  @Input()
  public set itemid(itemId: number)
  {
    this.getItem(itemId);
  }


  constructor(private itemService: ItemService) { }

  public getItem(itemId: number): void
  {
    this.itemService.GetItem(itemId).subscribe(item =>
    {
      this.item = item;
      this.noImage = false;
    });
  }

  public hideImage(): void
  {
    this.noImage = true;
  }
}
