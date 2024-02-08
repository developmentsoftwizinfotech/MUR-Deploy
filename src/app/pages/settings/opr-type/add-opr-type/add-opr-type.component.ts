import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {  OprType, OprTypeList } from '@app-pages/settings/setting';

import { OprService } from '@app-pages/settings/opr-type/opr.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ngx-add-opr-type',
  templateUrl: './add-opr-type.component.html',
  styleUrls: ['./add-opr-type.component.scss'] ,
  providers: [{ provide: root, useClass: CustomStateError },MessageService ]

})
export class AddOprTypeComponent {
  loading = false;
    formTitle: string = "Add";
  selectedItem: OprType;
  existingValues: string[] = ['apple', 'banana', 'cherry'];
  nbForm: FormGroup;
  oprType: OprType[];
  customErrorStateMatcher = new CustomStateError()
  constructor(private formBuilder: FormBuilder, private oprService: OprService, protected dialogRef: NbDialogRef<AddOprTypeComponent>  , private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      OprTypeId: [''],
      OprTypeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
    this.getOprTypeListRecords()
  }


  getOprTypeListRecords() {
    this.oprService.getOprTypeList(1,100,'').subscribe((res: OprTypeList) => {
      console.log(res)
      this.oprType = res.OprTypeData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('OprTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.oprType, 'OprTypeName',this.selectedItem.OprTypeName)]);
        // this.nbForm.get('OprTypeName').updateValueAndValidity();
      } else {
        this.nbForm.get('OprTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.oprType, 'OprTypeName', null)]);
        // this.nbForm.get('OprTypeName').updateValueAndValidity();
      }
    })
  }





  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        OprTypeId: this.selectedItem.OprTypeId,
        OprTypeName: this.selectedItem.OprTypeName,
      });
    }
  }



  close() {
    this.dialogRef.close();
  }
  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      
      if (this.selectedItem !== undefined) {
        this.nbForm.get('OprTypeId').setValue(this.selectedItem.OprTypeId);
        const oprDetails = this.nbForm.value
        this.oprService.updateOprTypeDetail(oprDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(oprDetails);
            // this.close();
          }else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
        })
      } else {
        const oprDetails = this.nbForm.value
        this.oprService.addOprTypeDetail(oprDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(oprDetails);
            // this.close();
          }else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
        })
      }

    } else {
      this.nbForm.markAllAsTouched();
    }
  }
  
  


showPop(status: string, summary: string, detail: string) {
this.messageService.add({ severity: status, summary: summary, detail: detail })
}

}




