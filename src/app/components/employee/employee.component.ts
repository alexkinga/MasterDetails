import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {switchMap} from "rxjs/operators";
import {EmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll()
  private _selectedEmployeeIdSubject: Subject<number> = new Subject<number>();
  public selectedEmployeeId$: Observable<number> = this._selectedEmployeeIdSubject.asObservable()



  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe((
    switchMap(data => this._employeeService.getOne(data))),tap(console.log),
  )

  constructor(private _employeeService : EmployeeService) {
  }

  selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(id)

  }
}
