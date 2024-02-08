import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supply, SupplyList } from '@app-pages/settings/setting';
import { NbDialogRef } from '@nebular/theme';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { SupplyService } from '@app-pages/settings/supply/supply.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-supply-type',
  templateUrl: './add-supply-type.component.html',
  styleUrls: ['./add-supply-type.component.scss'],
  providers: [MessageService]
})
export class AddSupplyTypeComponent implements OnInit {

  formTitle: string = "Add";
  loading = false;
  selectedItem: Supply;

  customErrorStateMatcher = new CustomStateError()
  supplyData: Supply[] | null;
  nbForm: FormGroup;
  supplyDetails: any;
  constructor(private formBuilder: FormBuilder, private supplyService: SupplyService, protected dialogRef: NbDialogRef<AddSupplyTypeComponent>, private router: Router, private messageService: MessageService) {
    this.getSupplyListRecords();
    this.nbForm = this.formBuilder.group({
      SupplyTypeId: [''],
      SupplyTypeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
  }
  getSupplyListRecords() {
    this.supplyService.getSupplyList(1,100,'').subscribe((res: SupplyList) => {
      console.log(res)
      this.supplyData = res.SupplyTypeData
      if (this.selectedItem !== undefined) {
        debugger;
        this.nbForm.get('SupplyTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.supplyData, 'SupplyTypeName',this.selectedItem.SupplyTypeName)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      } else {
        this.nbForm.get('SupplyTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.supplyData, 'SupplyTypeName', null)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      }

    })
  }






  ngOnInit(): void {
    this.getSupplyListRecords()


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        SupplyTypeId: this.selectedItem.SupplyTypeId,
        SupplyTypeName: this.selectedItem.SupplyTypeName,
      });
    }
  }



  close() {
    this.dialogRef.close();
  }








  submit() {

    //debugger



    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true
      this.customErrorStateMatcher.trimFormValues(this.nbForm)



      if (this.selectedItem !== undefined) {
        this.nbForm.get('SupplyTypeId').setValue(this.selectedItem.SupplyTypeId);
        const supplyDetails = this.nbForm.value
        this.supplyService.updateSupplyDetail(supplyDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(supplyDetails);
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
        const supplyDetails = this.nbForm.value
        this.supplyService.addSupplyDetail(supplyDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(supplyDetails);
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


