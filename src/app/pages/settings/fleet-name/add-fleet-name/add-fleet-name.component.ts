import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Fleet, FleetList } from '@app-pages/settings/setting';
import { FleetService } from '@app-pages/settings/fleet-name/fleet.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ngx-add-fleet-name',
  templateUrl: './add-fleet-name.component.html',
  styleUrls: ['./add-fleet-name.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError },MessageService]

})
export class AddFleetNameComponent {




  formTitle: string = "Add";
  loading = false;

  selectedItem: Fleet;
  customErrorStateMatcher = new CustomStateError()
  nbForm: FormGroup;
  fleet: Fleet[];
  constructor(private formBuilder: FormBuilder, private fleetService: FleetService, protected dialogRef: NbDialogRef<AddFleetNameComponent>, private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      FleetId: [''],
      FleetName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

    });
    this.getFleetListRecords()
  }












  ngOnInit(): void {


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        FleetId: this.selectedItem.FleetId,
        FleetName: this.selectedItem.FleetName,
      });
    }
  }

  getFleetListRecords() {
    this.fleetService.getfleetList(1,100,'').subscribe((res: FleetList) => {
      //console.log(res)
      this.fleet = res.FleetData;

      if (this.selectedItem !== undefined) {
        this.nbForm.get('FleetName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100), this.customErrorStateMatcher.duplicateValidator(this.fleet, 'FleetName', this.selectedItem.FleetName)]);
        // this.nbForm.get('FleetName').updateValueAndValidity();
      } else {
        this.nbForm.get('FleetName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100), this.customErrorStateMatcher.duplicateValidator(this.fleet, 'FleetName', null)]);
        // this.nbForm.get('FleetName').updateValueAndValidity();
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
        this.nbForm.get('FleetId').setValue(this.selectedItem.FleetId);
        const fleetDetails = this.nbForm.value
        this.fleetService.updatefleetDetail(fleetDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(fleetDetails);
            // this.close();
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
        const fleetDetails = this.nbForm.value
        this.fleetService.addfleetDetail(this.nbForm.value).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(fleetDetails);
            // this.close();
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




