import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator"
import { MatTableDataSource, MatTableModule} from "@angular/material/table"
import { MatToolbarModule} from "@angular/material/toolbar"
import {  MatSort, MatSortModule} from "@angular/material/sort"
import {  MatIconModule} from "@angular/material/icon"
import {  MatDialog, MatDialogModule} from "@angular/material/dialog"
import {MatInputModule} from "@angular/material/input"
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FamilyemployeedetailComponent } from '../familyemployeedetail/familyemployeedetail.component';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-familyemployeelist',
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
  templateUrl: './familyemployeelist.component.html',
  styleUrls: ['./familyemployeelist.component.scss']
})
export class FamilyemployeelistComponent {

  displayedColumns: string[] = ['employeeId', 'firstName','middleName', 'lastName', 'relationId', 'dob', 'action'];
  dataSource!:MatTableDataSource<any>;

    @ViewChild(MatSort) sort!:MatSort
    @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private apiService:ApiService,private _dialog:MatDialogModule,private dialog:MatDialog) {
    const EmployeesFamily=Array.from({length:100},)
    this.dataSource = new MatTableDataSource()
    this.getEmployeeFamily();
   }
    
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployeeFamily(){
      this.apiService.getAllEmployeeFamily()
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

    DeleteEmployeeFamily(id:string,employee:any, employeerelation:any){
      if(confirm('Are you sure to delete detail of ' + employee.employeeName + ' ' +employeerelation.relation +' ?'))
      this.apiService.deleteEmployeeFamily(id)
      .subscribe({
        next:(response)=>{
          this.getEmployeeFamily();
        }
      });
    }
    
    openemployeefamily(){
      // debugger
      const dialogRef = this.dialog.open(FamilyemployeedetailComponent);
      dialogRef.afterClosed().subscribe({
        next:(val) => {
            if(val){
              this.getEmployeeFamily();
            }
        },
      });
    }
    UpdateEmployeeFamily(data:any){
      console.log(data)
      const dialogRef = this.dialog.open(FamilyemployeedetailComponent,{
        data,
      });
      dialogRef.afterClosed().subscribe({
        next:(val) => {
          console.log(val);
          
              this.getEmployeeFamily();
            
        },
      });
    }
  
}
