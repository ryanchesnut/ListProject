import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DndListModule } from 'ngx-drag-and-drop-lists';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    DndListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
