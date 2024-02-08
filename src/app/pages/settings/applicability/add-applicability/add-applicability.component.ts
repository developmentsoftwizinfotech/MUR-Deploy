import { Component, OnInit } from '@angular/core';
import { Applicability, ApplicabilityList, Charterer, ChartererList } from '@app-pages/settings/setting';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { ApplicabilityService } from '@app-pages/settings/applicability/applicability.service';
import { NbDialogRef } from '@nebular/theme';
import { ChartererService } from '@app-pages/settings/charterer/charterer.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-add-applicability',
  templateUrl: './add-applicability.component.html',
  styleUrls: ['./add-applicability.component.scss'],
  providers: [MessageService]
})
export class AddApplicabilityComponent implements OnInit {
  formTitle: string = "Add";
  dropDownCharterer: Charterer[];
  selectedItem: Applicability;
  customErrorStateMatcher = new CustomStateError()
  cargoData: Applicability[] | null;
  nbForm: FormGroup;

  loading = false;
  dataToSend = {
    header: 'No Internet',
    title: 'No internet connection. Connect to the internet and try again. '
  }

  constructor(private formBuilder: FormBuilder, private applicabilityService: ApplicabilityService, private chartererService: ChartererService, protected dialogRef: NbDialogRef<AddApplicabilityComponent>, private router: Router, private messageService: MessageService) {
    this.getCargoListRecords();
    this.nbForm = this.formBuilder.group({
      ApplicableId: [''],
      ApplicableName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      ChartererId: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCargoListRecords()
    this.getDropDownListRecodes(1, 100, '');
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        ApplicableId: this.selectedItem.ApplicableId,
        ApplicableName: this.selectedItem.ApplicableName,
        ChartererId: this.selectedItem.ChartererId,
      });
    }
  }

  // toggleLoadingAnimation() {
  //   if (this.nbForm.valid) {
  //     this.loading = true;
  //   }
  //   setTimeout(() => this.loading = false, 3000);
  // }

  getCargoListRecords() {
    this.applicabilityService.getApplicabilityList(1, 100, "").subscribe((res: ApplicabilityList) => {
      console.log(res)
      this.cargoData = res.ApplicableData
      if (this.selectedItem !== undefined) {
        this.nbForm.get('ApplicableName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.cargoData, 'ApplicableName', this.selectedItem.ApplicableName)]);
        this.nbForm.get('ApplicableName').updateValueAndValidity();
      } else {
        this.nbForm.get('ApplicableName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.cargoData, 'ApplicableName', null)]);
        this.nbForm.get('ApplicableName').updateValueAndValidity();
      }

    })
  }

  clearform() {
    // this.nbForm.reset();
    this.nbForm = this.formBuilder.group({
      ApplicableId: [''],
      ApplicableName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      ChartererId: [null, [Validators.required]],
    });
  }

  close() { this.dialogRef.close(); }

  getDropDownListRecodes(cPage, nRows, filter) {
    this.chartererService.getChartererList(cPage, nRows, filter).subscribe((res: ChartererList) => {
      this.dropDownCharterer = res.ChartererData;
      // console.log(this.dropDownCharterer)
    })
  }

  submit() {

    debugger
    if (this.nbForm.valid) {
      this.loading = true
      if (navigator.onLine) {
        this.customErrorStateMatcher.trimFormValues(this.nbForm)
        if (this.selectedItem !== undefined) {
          this.nbForm.get('ApplicableId').setValue(this.selectedItem.ApplicableId)
          const ApplicableDetails = this.nbForm.value
          this.applicabilityService.updateApplicabilityDetail(ApplicableDetails).subscribe(
            (res) => {
              if (res == true) {
                setTimeout(() => this.loading = false, 3000);
                this.dialogRef.close(ApplicableDetails);
              } else {
                this.loading = false
                this.showPop('warn', 'Alert', 'Somthing went wrong');

              }
            },
            (error) => {
              if (error.status === 404 || error.status === 500) {
                this.router.navigate(['/error']);
              }
            }
          )
        } else {
          const ApplicableDetails = this.nbForm.value
          this.applicabilityService.addApplicabilityDetail(ApplicableDetails).subscribe((res) => {
            if (res == true) {
            this.loading = false
              this.dialogRef.close(ApplicableDetails);
            }
            else {
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
        this.dialogRef.close();
        const ID = 'Internet Not Found';
        // this.router.navigate(['/destination', dataToSend]);
        // const dataToSend = JSON.stringify(this.myObject);
        this.router.navigate(['/pages/error'],{ queryParams: {ID }});
        // this.router.navigate(['/pages/settings/nointernet', adataToSend]);
      }
    } else {
      this.nbForm.markAllAsTouched();
    }
    // setTimeout(() => this.loading = false, 4000);
  }


  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}

