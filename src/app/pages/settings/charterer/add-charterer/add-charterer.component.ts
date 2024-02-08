import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Charterer, ChartererList } from '@app-pages/settings/setting';

import { ChartererService } from '@app-pages/settings/charterer/charterer.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-charterer',
  templateUrl: './add-charterer.component.html',
  styleUrls: ['./add-charterer.component.scss'],
  providers: [MessageService, ConfirmationService,

    { provide: root, useClass: CustomStateError }
  ]
})
export class AddChartererComponent implements OnInit {
  customErrorStateMatcher = new CustomStateError()


  @Component({
    selector: 'ngx-add-operator',
    templateUrl: './add-operator.component.html',
    styleUrls: ['./add-operator.component.scss'],
    providers: [MessageService]
  })






  formTitle: string = "Add";

  selectedItem: Charterer;
  loading = false;
  nbForm: FormGroup;
  charterer: Charterer[];
  constructor(private formBuilder: FormBuilder, private router: Router, private messageService: MessageService, private chartererService: ChartererService, protected dialogRef: NbDialogRef<AddChartererComponent>) {
    this.nbForm = this.formBuilder.group({
      ChartererId: [''],
      ChartererName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

    });
    this.getChartererListRecords()
  }
  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        ChartererId: this.selectedItem.ChartererId,
        ChartererName: this.selectedItem.ChartererName,
      });
    }
  }

  getChartererListRecords() {
    this.chartererService.getChartererList(1,100,"").subscribe((res: ChartererList) => {
      console.log(res)
      this.charterer = res.ChartererData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('ChartererName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.charterer, 'ChartererName', this.selectedItem.ChartererName)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      } else {
        this.nbForm.get('ChartererName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.charterer, 'ChartererName', null)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      }
    })
  }


  close() {
    this.dialogRef.close();
  }

  clearForm(){
    this.nbForm = this.formBuilder.group({
      ChartererId: [''],
      ChartererName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

    });
    this.getChartererListRecords()
  }

  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)

      if (this.selectedItem !== undefined) {
        this.nbForm.get('ChartererId').setValue(this.selectedItem.ChartererId);
        const chartererDetails = this.nbForm.value
        this.chartererService.updateChartererDetail(chartererDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(chartererDetails);
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
      } else {
        const chartererDetails = this.nbForm.value
        this.chartererService.addChartererDetail(chartererDetails).subscribe(res => {
          if (res == true) {

            this.loading = false
            this.dialogRef.close(chartererDetails);
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
      this.nbForm.markAllAsTouched();
    }
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}



