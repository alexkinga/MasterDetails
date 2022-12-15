import { NgModule } from '@angular/core';
import { CryptoListComponent } from './crypto-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    NgIf
  ],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
