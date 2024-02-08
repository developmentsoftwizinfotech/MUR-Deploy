
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Status } from '@app-pages/settings/setting';
import { StatusService } from '@app-pages/settings/status/status.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError }, MessageService]









})
export class AddStatusComponent implements OnInit{



  loading = false;
  formTitle: string = "Add";
  customErrorStateMatcher = new CustomStateError()
  selectedItem: Status;
  existingValues: string[] = ['apple', 'banana', 'cherry'];
  nbForm: FormGroup;
  status: Status[];
  constructor(private formBuilder: FormBuilder, private statusService: StatusService, protected dialogRef: NbDialogRef<AddStatusComponent>, private router: Router, private messageService: MessageService
  ) {
    this.nbForm = this.formBuilder.group({
      StatusId: [''],
      StatusName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
    this.getstatusListRecords()
  }








  ngOnInit(): void {


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        StatusId: this.selectedItem.StatusId,
        StatusName: this.selectedItem.StatusName,
      });
    }
  }

  getstatusListRecords() {
    this.statusService.getStatusList().subscribe((res: Status[]) => {
      console.log(res)
      this.status = res;

      if (this.selectedItem !== undefined) {
        this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', this.selectedItem.StatusName)]);
        // this.nbForm.get('StatusName').updateValueAndValidity();
      } else {
        this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', null)]);
        // this.nbForm.get('StatusName').updateValueAndValidity();
      }

    })
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
        this.nbForm.get('StatusId').setValue(this.selectedItem.StatusId);
        const statusDetails = this.nbForm.value
        this.statusService.updateStatusDetail(statusDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(statusDetails);
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
        const statusDetails = this.nbForm.value
        this.statusService.addStatusDetail(statusDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(statusDetails);
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



