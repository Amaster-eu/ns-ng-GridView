import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { ItemService } from './item/item.service';
import { ItemDetailComponent } from './item/item-detail.component';
import { ItemsComponent } from './item/items.component';

import { GridViewModule } from 'nativescript-grid-view/angular';
import * as trace from 'tns-core-modules/trace';

trace.setCategories('ns-grid-view');
// trace.enable();

import { registerElement } from 'nativescript-angular';

registerElement('Gradient', () => require('nativescript-gradient').Gradient);

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    GridViewModule,
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [
    ItemService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
