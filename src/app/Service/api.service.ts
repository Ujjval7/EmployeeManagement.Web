import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseApiUrl: string = "https://localhost:7116"
  constructor(private http: HttpClient) { }

  //Employee
  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Employee/GetAll')
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/employee?id=' + id)
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/employee?id=' + id, employee)
  }

  addEmployee(addEmployeeRequest: any): Observable<any> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<any>(this.baseApiUrl + '/api/Employee', addEmployeeRequest)
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/Employee?id=' + id)
  }

  //Designation
  getAllDesignation(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Designation/GetAll')
  }

  getDesignation(id: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Designation?id=' + id)
  }

  updateDesignation(id: string, designation: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/Designation?id=' + id, designation)
  }

  addDesignation(addDesignationRequest: any): Observable<any> {
    addDesignationRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<any>(this.baseApiUrl + '/api/Designation', addDesignationRequest)
  }
  
  deleteDesignation(id: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/Designation?id=' + id)
  }

  //EmployeeAddress
  getAllEmployeeAddress(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/EmployeeAddress/GetAll')
  }

  getEmployeeAddress(id: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/EmployeeAddress?id=' + id)
  }

  updateEmployeeAddress(id: string, employeeAddress: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/EmployeeAddress?id=' + id, employeeAddress)
  }

  addEmployeeAddress(addemployeeAddressRequest: any): Observable<any> {
    addemployeeAddressRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<any>(this.baseApiUrl + '/api/EmployeeAddress', addemployeeAddressRequest)
  }
  
  deleteEmployeeAddress(id: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/EmployeeAddress?id=' + id)
  }

  //City
  getAllCity(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/City/GetAll')
  }

  //State
  getAllState(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/State/GetAll')
  }

  getByCountryId(countryId: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/State/GetByCountryId?id=' + countryId)
  }
  // getByCountryId(id : string){
  //   return this.http.get(`${this.baseApiUrl}/api/State/GetByCountryId?id=`+id)
  // }

  //Country
  getAllCountry(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Country/GetAll')
  }

  //AddressType
  getAllAddressType(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/AddressType/GetAll')
  }

  //EmployeeFamily
  getAllEmployeeFamily(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/EmployeeFamilyDetail/GetAll')
  }

  getEmployeeFamily(id: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/EmployeeFamilyDetail?id=' + id)
  }

  updateEmployeeFamily(id: string, employeeFamily: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/EmployeeFamilyDetail?id=' + id, employeeFamily)
  }

  addEmployeeFamily(addemployeeFamilyRequest: any): Observable<any> {
    addemployeeFamilyRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<any>(this.baseApiUrl + '/api/EmployeeFamilyDetail', addemployeeFamilyRequest)
  }

  deleteEmployeeFamily(id: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/EmployeeFamilyDetail?id=' + id)
  }

  //Relation
  getAllRelation(): Observable<any> {
      return this.http.get<any>(this.baseApiUrl + '/api/EmployeeRelation/GetAll')
  }

}
