import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
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
  declarations: [EmployeeComponent],
  providers: [],
  exports: [EmployeeComponent]
})
export class EmployeeComponentModule {
}
