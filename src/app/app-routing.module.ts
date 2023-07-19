import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './Componenet/employee-details/employee-details.component';
import { EmployeeListComponent } from './Componenet/employee-list/employee-list.component';
import { DesignationDetailsComponent } from './Componenet/designation-details/designation-details.component';
import { DesignationListComponent } from './Componenet/designation-list/designation-list.component';
import { EmployeeAddressDetailsComponent } from './Componenet/employee-address-details/employee-address-details.component';
import { EmployeeAddressListComponent } from './Componenet/employee-address-list/employee-address-list.component';
import { FamilyemployeedetailComponent } from './Componenet/familyemployeedetail/familyemployeedetail.component';
import { FamilyemployeelistComponent } from './Componenet/familyemployeelist/familyemployeelist.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },

  {
    path: 'designation-details',
    component: DesignationDetailsComponent
  },
  {
    path: 'designation-details/:id',
    component: DesignationDetailsComponent
  },
  {
    path: 'designation-list',
    component: DesignationListComponent
  },

  {
    path: 'employeeAddress-details',
    component: EmployeeAddressDetailsComponent
  },
  {
    path: 'employeeAddress-details/:id',
    component: EmployeeAddressDetailsComponent
  },
  {
    path: 'employeeAddress-list',
    component: EmployeeAddressListComponent
  },

  {
    path: 'familyemployee-details',
    component: FamilyemployeedetailComponent
  },
  {
    path: 'familyemployee-details/:id',
    component: FamilyemployeedetailComponent
  },
  {
    path: 'familyemployee-list',
    component: FamilyemployeelistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
