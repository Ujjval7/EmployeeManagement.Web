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
  selector: 'app-employee-details',
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
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  
  designation:any[]=[]

    employeeForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      middleName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      empCode: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      designationId:new FormControl(null, Validators.required),
      phone:new FormControl(null,Validators.required),
      mobile: new FormControl(null, Validators.required),
      gender:new FormControl(null,Validators.required),
      dob:new FormControl( '', Validators.required),
      doj:new FormControl('', Validators.required),
      emergencyContactNo:new FormControl(null,Validators.required),
      emergencyContactName :new FormControl(null,Validators.required),

    });
    constructor(private fb: FormBuilder, 
      private apiService:ApiService, 
      private router:Router,
      private route:ActivatedRoute,
      private dialogRef:MatDialogRef<EmployeeDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit(){
      let startDate:any=new Date();
      this.employeeForm.patchValue(this.data);
      
      this.apiService.getAllDesignation()
        .subscribe({
          next:result =>{
            this.designation=result;
          }
        })
    }

    public hasError = (controlName: string, errorName: string) =>{
    }
    
    onSubmit(){
      if (this.data) {
        console.log(this.employeeForm.value)
        this.apiService.updateEmployee(this.data.id, this.employeeForm.value)
          .subscribe({
            next: (result) => {
              alert("Employee Updated")
              this.dialogRef.close(true) 
            }
          })
      }
      else {
        console.log(this.employeeForm.value)
        this.apiService.addEmployee(this.employeeForm.value)
          .subscribe({
            next: (result) => {
              alert("Employee Added Successfully")
              this.dialogRef.close(true)
            }
          })
      }
    }


}
