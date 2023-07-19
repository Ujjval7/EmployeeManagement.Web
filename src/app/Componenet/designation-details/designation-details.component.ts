import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Service/api.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-designation-details',
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
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.scss']
})
export class DesignationDetailsComponent {

  designationForm = new FormGroup({
    id:new FormControl(''),
    designationName: new FormControl(null, Validators.required),
    
});

  constructor(private apiService:ApiService,
     private router:Router,
     private route:ActivatedRoute, 
     private dialogRef: MatDialogRef<DesignationDetailsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any){}


  ngOnInit(){
    this.designationForm.patchValue(this.data);
  }

  public hasError = (controlName: string, errorName: string) =>{
  }
  
  onSubmit(){
    if (this.data) {
      console.log(this.designationForm.value)
      this.apiService.updateDesignation(this.data.id, this.designationForm.value)
        .subscribe({
          next: (result) => {
            alert("Designation Updated")
            this.dialogRef.close(true)

          }
        })
    }
    else {
      console.log(this.designationForm.value)
      this.apiService.addDesignation(this.designationForm.value)
        .subscribe({
          next: (result) => {
           alert("Designation Added Successfully")
            this.dialogRef.close(true)

          }
        })
    }
  }
}
