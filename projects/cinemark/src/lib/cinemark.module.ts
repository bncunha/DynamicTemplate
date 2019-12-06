import { NgModule } from '@angular/core';
import { CinemarkComponent } from './cinemark.component';
import { HeaderCinemarkComponent } from './header-cinemark/header-cinemark.component';

@NgModule({
  declarations: [CinemarkComponent, HeaderCinemarkComponent],
  entryComponents: [HeaderCinemarkComponent],
  imports: [
  ],
  exports: [CinemarkComponent,HeaderCinemarkComponent]
})
export class CinemarkModule { }
