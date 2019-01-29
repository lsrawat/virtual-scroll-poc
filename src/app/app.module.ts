import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { AgGridExampleComponent } from './components/ag-grid-example/ag-grid-example.component';
import { VirtualScrollerExampleComponent } from './components/virtual-scroller-example/virtual-scroller-example.component';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AgGridExampleComponent,
    VirtualScrollerExampleComponent,
  ],
  imports: [
    BrowserModule,
    VirtualScrollerModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
