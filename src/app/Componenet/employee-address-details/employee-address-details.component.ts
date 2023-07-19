import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/Service/api.service';
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

@Component({
  selector: 'app-employee-address-details',
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
  templateUrl: './employee-address-details.component.html',
  styleUrls: ['./employee-address-details.component.scss']
})
export class EmployeeAddressDetailsComponent {

  form!: FormGroup;
  Employees:any[]=[];
  Cities:any[]=[];
  States:any[]=[];
  Countrys:any[]=[];
  AddressTypes:any[]=[];
  
  employeeAddressForm = new FormGroup({
  id: new FormControl(null),
    employeeId:new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    cityId:new FormControl(null, Validators.required),
    stateId:new FormControl(null, Validators.required),
    countryId:new FormControl(null, Validators.required),
    addressTypeId:new FormControl(null, Validators.required),
  });
  constructor(private fb: FormBuilder, 
    private apiService:ApiService, 
    private router:Router,
    private route:ActivatedRoute,
    private dialogRef:MatDialogRef<EmployeeAddressDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      // this.getStateByCid(id);
    }


  ngOnInit(){
    this.employeeAddressForm.patchValue(this.data);
    let countryId = '2e94fa21-5a35-47ad-83cc-2a6a91b97380';
    
    this.apiService.getAllEmployee()
        .subscribe({
          next:result =>{
            this.Employees=result;
          }
        })

    this.apiService.getAllCity()
    .subscribe({
      next:result =>{
        this.Cities=result;
      }
    })

    this.apiService.getByCountryId(countryId)
    .subscribe({
      next:result =>{
        this.States=result;
      } 
    })

    this.apiService.getAllCountry()
    .subscribe({
      next:result =>{
        this.Countrys=result;
      }
    })

    this.apiService.getAllAddressType()
    .subscribe({
      next:result =>{
        this.AddressTypes=result;
      }
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
  }
  
  // getStateByCid(id:string){
  //   this.apiService.getByCountryId(id)
  //   .subscribe({
  //     next:(result)=>{
  //       console.log(result);
  //     }
  //   })
    
  // }

  onSubmit(){
    if (this.data) {
      console.log(this.employeeAddressForm.value)
      this.apiService.updateEmployeeAddress(this.data.id, this.employeeAddressForm.value)
        .subscribe({
          next: (result) => {
            alert("EmployeeAddress Updated")
            this.dialogRef.close(true)

          }
        })
    }
    else {
      console.log(this.employeeAddressForm.value)
      this.apiService.addEmployeeAddress(this.employeeAddressForm.value)
        .subscribe({
          next: (result) => {
            alert("EmployeeAddress Added Successfully")
            this.dialogRef.close(true)

          }
        })
    }
  }

}
