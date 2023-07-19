import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-familyemployeedetail',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule],
  templateUrl: './familyemployeedetail.component.html',
  styleUrls: ['./familyemployeedetail.component.scss']
})
export class FamilyemployeedetailComponent {

  employee:any[]=[]
  relation:any[]=[]

    employeefamilyForm = new FormGroup({
      id: new FormControl(null),
      employeeId:new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      middleName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dob:new FormControl( '', Validators.required),
      relationId:new FormControl(null, Validators.required),
      
    });
    constructor(private fb: FormBuilder, 
      private apiService:ApiService, 
      private router:Router,
      private route:ActivatedRoute,
      private dialogRef:MatDialogRef<FamilyemployeedetailComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit(){
      let startDate:any=new Date();
      this.employeefamilyForm.patchValue(this.data);
      
      this.apiService.getAllEmployee()
        .subscribe({
          next:result =>{
            this.employee=result;
          }
        })

        this.apiService.getAllRelation()
        .subscribe({
          next:result =>{
            this.relation=result;
          }
        })
    }
    
    public hasError = (controlName: string, errorName: string) =>{
    }
    
    onSubmit(){
      if (this.data) {
        console.log(this.employeefamilyForm.value)
        this.apiService.updateEmployeeFamily(this.data.id, this.employeefamilyForm.value)
          .subscribe({
            next: (result) => {
              alert("EmployeeFamily Updated")
              this.dialogRef.close(true) 
            }
          })
      }
      else {
        console.log(this.employeefamilyForm.value)
        this.apiService.addEmployeeFamily(this.employeefamilyForm.value)
          .subscribe({
            next: (result) => {
              alert("EmployeeFamily Added Successfully")
              this.dialogRef.close(true)
            }
          })
      }
    }

}
