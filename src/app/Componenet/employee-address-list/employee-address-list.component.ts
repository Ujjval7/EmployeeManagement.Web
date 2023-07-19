import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator"
import { MatTableDataSource, MatTableModule} from "@angular/material/table"
import { MatToolbarModule} from "@angular/material/toolbar"
import {  MatSort, MatSortModule} from "@angular/material/sort"
import {  MatIconModule} from "@angular/material/icon"
import {  MatDialog, MatDialogModule} from "@angular/material/dialog"
import {MatInputModule} from "@angular/material/input"
import { EmployeeAddressDetailsComponent } from '../employee-address-details/employee-address-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-employee-address-list',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule],
  templateUrl: './employee-address-list.component.html',
  styleUrls: ['./employee-address-list.component.scss']
})
export class EmployeeAddressListComponent {

  displayedColumns: string[] = ['employeeId', 'address','cityId', 'stateId', 'countryId', 'addressTypeId','action'];
  dataSource!:MatTableDataSource<any>;

  
  @ViewChild(MatSort) sort!:MatSort
  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private apiService:ApiService,private _dialog:MatDialogModule,private dialog:MatDialog) {
    const EmployeesFamilyAddress=Array.from({length:100},)
    this.dataSource = new MatTableDataSource()
    this.getEmployeeAddresses();
   }
    
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployeeAddresses(){
      this.apiService.getAllEmployeeAddress()
      .subscribe({
        next:(result)=>
        {
          console.log(result)
          this.dataSource=new MatTableDataSource(result);
          this.dataSource.sort=this.sort;
          this.dataSource.paginator=this.paginator;     
        }
      })
    }

    DeleteEmployeeAddress(id:string,employeeAddress:any){
      if(confirm('Are you sure you want to delete ' + employeeAddress.employeeName + '?'))
      this.apiService.deleteEmployeeAddress(id)
      .subscribe({
        next:(response)=>{
          this.getEmployeeAddresses();
        }
      });
    }

    openemployeeAddress(){
      // debugger
      const dialogRef = this.dialog.open(EmployeeAddressDetailsComponent);
      dialogRef.afterClosed().subscribe({
        next:(val) => {
            if(val){
              this.getEmployeeAddresses();
            }
        },
      });
    }

    UpdateEmployeeAddress(data:any){
      console.log(data)
      const dialogRef = this.dialog.open(EmployeeAddressDetailsComponent,{
        data,
      });
      dialogRef.afterClosed().subscribe({
        next:(val) => {
          console.log(val);
            
              this.getEmployeeAddresses();
            
        },
      });
    }
  
}
