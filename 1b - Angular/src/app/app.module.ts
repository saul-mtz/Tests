import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemService } from './tab-strip/tab-container/item.service';
import { TabService } from './tab-strip/tab-strip/tab.service';
import { TabStripComponent } from './tab-strip/tab-strip/tab-strip.component';
import { TabContainerComponent } from './tab-strip/tab-container/tab-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TabStripComponent,
    TabContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemService, TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
