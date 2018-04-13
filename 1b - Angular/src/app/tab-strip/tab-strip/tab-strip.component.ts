import { Component, OnInit } from '@angular/core';

import { TabService } from './tab.service';
import { ItemService } from '../tab-container/item.service';
import Tab from './tab';

@Component({
  selector: 'app-tab-strip',
  templateUrl: './tab-strip.component.html',
  styleUrls: ['./tab-strip.component.css']
})
export class TabStripComponent implements OnInit
{
  public tabs: Tab[];
  public selectedTabId: number;



  constructor(private tabService: TabService) { }

  ngOnInit(): void
  {
    this.tabService.GetTabs().subscribe(tabs => 
    {
      this.tabs = tabs;

      if (this.tabs.length > 0) this.selectTab(this.tabs[0].id);
    });
  }

  public selectTab(tabId: number, $event?: Event): void
  {
    this.selectedTabId = tabId;
    if ($event) $event.preventDefault();
  }
}
