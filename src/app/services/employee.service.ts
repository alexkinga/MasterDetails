import {Injectable} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../models/api-response.model";
import {EmployeeResponse} from "../models/employee-response.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .pipe(map(
        res => ({
          name: res.data.employee_name,
          salary: res.data.employee_salary,
          img: res.data.employee_image,
          age: res.data.employee_age,
          personalNumber: res.data.id,
          mail: res.data.employee_name + "@gmail.com"
        })
      ))
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.employee_image,
            salary: employeeResponse.employee_salary,
            mail: employeeResponse.employee_name + '@lowgular.io',
          }
        })
      }))
  }
}
