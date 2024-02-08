import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';


import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { root } from 'rxjs/internal-compatibility';
import { MessageService, ConfirmationService } from 'primeng/api';

import { VesselOperator, VesselOperatorList } from "@app-pages/settings/vessel-operator/vessel-operator";
import { VesselOperatorService } from "@app-pages/settings/vessel-operator/vessel-operator.service";
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-operator',
  templateUrl: './add-operator.component.html',
  styleUrls: ['./add-operator.component.scss'],

  providers: [MessageService, ConfirmationService, { provide: root, useClass: CustomStateError }]









})
export class AddOperatorComponent {


  customErrorStateMatcher = new CustomStateError()

  loading = false;
  formTitle: string = "Add";

  selectedItem: VesselOperator;

  nbForm: FormGroup;
  vessel: VesselOperator[];
  constructor(private formBuilder: FormBuilder, private vesselOperatorService: VesselOperatorService, protected dialogRef: NbDialogRef<AddOperatorComponent>, private router: Router, private messageService: MessageService) {
    this.nbForm = this.formBuilder.group({
      VesselOperatorId: [''],
      VesselOperatorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

    });
    this.getCargoListRecords(1, 100, '')
  }




  getCargoListRecords(cpage, nRows, filter) {
    this.vesselOperatorService.getOperatorList(cpage, nRows, filter).subscribe((res: VesselOperatorList) => {
      console.log(res)
      this.vessel = res.VesselOperatorData;

      if (this.selectedItem !== undefined) {
        this.nbForm.get('VesselOperatorName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100), this.customErrorStateMatcher.duplicateValidator(this.vessel, 'VesselOperatorName', this.selectedItem.VesselOperatorName)]);
        // this.nbForm.get('VesselOperatorName').updateValueAndValidity();
      } else {
        this.nbForm.get('VesselOperatorName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100), this.customErrorStateMatcher.duplicateValidator(this.vessel, 'VesselOperatorName', null)]);
        // this.nbForm.get('VesselOperatorName').updateValueAndValidity();
      }

    })
  }



  ngOnInit(): void {


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        VesselOperatorId: this.selectedItem.VesselOperatorId,
        VesselOperatorName: this.selectedItem.VesselOperatorName,
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
        this.nbForm.get('VesselOperatorId').setValue(this.selectedItem.VesselOperatorId);
        const operatorDetails = this.nbForm.value
        this.vesselOperatorService.updateOperatorDetail(operatorDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(operatorDetails);
            // this.close();
          } else {
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
        const operatorDetails = this.nbForm.value
        this.vesselOperatorService.addOperatorDetail(operatorDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(operatorDetails);
            // this.close();
          } else {
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


