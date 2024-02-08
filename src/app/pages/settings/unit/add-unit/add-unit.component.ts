
import { Component } from '@angular/core';
import {  FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {  Unit, UnitList } from '@app-pages/settings/setting';

import { UnitService } from '@app-pages/settings/unit/unit.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
  providers: [MessageService]
})
export class AddUnitComponent {
  loading = false;
  
  formTitle: string = "Add";

  selectedItem: Unit;
  
  customErrorStateMatcher = new CustomStateError()
  supplyData: Unit[] | null;
  nbForm: FormGroup;
  vesselDetails: any;
  constructor(private formBuilder: FormBuilder, private unitService: UnitService, protected dialogRef: NbDialogRef<AddUnitComponent>, private router: Router, private messageService: MessageService) {
    this.getUnitListRecords();
    this.nbForm = this.formBuilder.group({
      UnitId: [''],
      UnitName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
  }
  getUnitListRecords() {
    this.unitService.getUnitList(1,100,'').subscribe((res: UnitList) => {
      console.log(res)
      this.supplyData = res.UnitData
      if (this.selectedItem !== undefined) {
        this.nbForm.get('UnitName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.supplyData, 'UnitName',this.selectedItem.UnitName)]);
        this.nbForm.get('UnitName').updateValueAndValidity();
      } else {
        this.nbForm.get('UnitName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.supplyData, 'UnitName', null)]);
        this.nbForm.get('UnitName').updateValueAndValidity();
      }

    })
  }

 




  ngOnInit(): void {
    this.getUnitListRecords()


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        UnitId: this.selectedItem.UnitId,
        UnitName: this.selectedItem.UnitName,
      });
    }
  }



  close() {
    this.dialogRef.close();
  }








  submit() {

    //debugger
    if (this.nbForm.valid) {
      this.loading = true
      this.customErrorStateMatcher.trimFormValues(this.nbForm)
    


      if (this.selectedItem !== undefined) {
        this.nbForm.get('UnitId').setValue(this.selectedItem.UnitId);
        const unitDetails = this.nbForm.value
        this.unitService.updateUnitDetail(unitDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(unitDetails);
            // this.close();
          }     else {
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
        const unitDetails = this.nbForm.value
        this.unitService.addUnitDetail(unitDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(unitDetails);
            // this.close();
          }     else {
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
