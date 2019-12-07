import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { DynamicContentModule } from 'projects/dynamic-component/src/public-api';
import { HeaderCinemarkComponent } from 'projects/cinemark/src/lib/header-cinemark/header-cinemark.component';
import { CinemarkModule } from 'projects/cinemark/src/public-api';
import { DynamicService } from 'projects/dynamic-component/src/lib/dynamic/dynamic.service';
import { CustomDynamicContentService } from 'src/config/custom-dynamic-content.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderDefaultComponent
  ], entryComponents: [
    HeaderCinemarkComponent
  ],
  imports: [
    BrowserModule,
    DynamicContentModule,
    CinemarkModule
  ],
  providers: [
    { provide: DynamicService, useClass: CustomDynamicContentService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
