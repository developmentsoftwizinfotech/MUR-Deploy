import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  NbDialogRef } from '@nebular/theme';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { FleetList, FleetTypeList } from '@app-pages/settings/setting';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-vessel',
  templateUrl: './add-vessel.component.html',
  styleUrls: ['./add-vessel.component.scss'],
  // providers: [MessageService, ConfirmationService] ,
  providers: [MessageService, ConfirmationService, { provide: root, useClass: CustomStateError }]

})
export class AddVesselComponent implements OnInit {
  formTitle: string = "Add";
  dropdownFleetList = [];
  dropDownFleetType = [];
  selectedItem: Vessel;
  nbForm!: FormGroup;
  vessel: Vessel[];
  customErrorStateMatcher = new CustomStateError()
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService, protected dialogRef: NbDialogRef<AddVesselComponent>, private vesselService: VesselService, private router: Router, private messageService: MessageService) {

    this.nbForm = new FormGroup({
      VesselId: new FormControl(""),
      VesselName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      IMONumber: new FormControl("", [Validators.required, Validators.pattern(/^\d{7}$/)]),
      FleetTypeId: new FormControl(null, [Validators.required]),
      FleetId: new FormControl(null, [Validators.required]),
      NoOfHold:new FormControl("",[Validators.required,Validators.pattern(/^\d{1,2}$/)]),
      DWT_T: new FormControl("", [Validators.required, Validators.pattern(/^\d{4,6}$/)]),

    });
  }
  numberValidator(control: AbstractControl) {
    const value = control.value;
    const numberRegex = /^\d{4,6}$/;

    if (!numberRegex.test(value) && value.length > 0) {
      return { invalidNumber: true };
    }

    return null;
  }

  ngOnInit(): void {
    this.getVesselListRecords(1, 100, '')
    this.getDropdownList(1,100,'');
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        VesselId: this.selectedItem.VesselId,
        VesselName: this.selectedItem.VesselName,
        IMONumber: this.selectedItem.IMONumber,
        FleetTypeId: this.selectedItem.FleetTypeId,
        FleetId: this.selectedItem.FleetId,
        NoOfHold: this.selectedItem.NoOfHold,
        DWT_T: this.selectedItem.DWT_T
      });
    }
  }


  getDropdownList(cPage, nRows, filter) {
    this.vesselService.dropdownFleetList(cPage, nRows, filter).subscribe((res: FleetList) => {
      this.dropdownFleetList = res.FleetData;
    })
    this.vesselService.dropdownFleetTypeList(cPage, nRows, filter).subscribe((res: FleetTypeList) => {
      this.dropDownFleetType = res.FleetTypeData;
    })

  }



  getVesselListRecords(cPage, nRows, filter) {
    debugger
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      console.log(res,"res")
      this.vessel = res.VesselData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('VesselName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.vessel, 'VesselName', this.selectedItem.VesselName)]);
        this.nbForm.get('IMONumber').setValidators([Validators.required, Validators.pattern(/^\d{7}$/), this.customErrorStateMatcher.duplicateValidatorNumber(this.vessel, 'IMONumber', this.selectedItem.IMONumber)]);
      } else {
        this.nbForm.get('VesselName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.vessel, 'VesselName', null)]);
        //debugger
        this.nbForm.get('IMONumber').setValidators([Validators.required, Validators.pattern(/^\d{7}$/), this.customErrorStateMatcher.duplicateValidatorNumber(this.vessel, 'IMONumber', null)]);
      }
    })
  }
  // getVesselListRecords(cPage, nRows, filter) {
  //   debugger
  //   this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
  //     debugger
  //     this.vesselDropdown = res.VesselData;
  //     console.log(this.vesselDropdown, " res.VesselData")

  //   })
  // }

  close() {
    this.dialogRef.close();
  }

  clearForm(){
    this.nbForm = new FormGroup({
      VesselId: new FormControl(""),
      VesselName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      IMONumber: new FormControl("", [Validators.required, Validators.pattern(/^\d{7}$/)]),
      FleetTypeId: new FormControl(null, [Validators.required]),
      FleetId: new FormControl(null, [Validators.required]),
      NoOfHold:new FormControl("",[Validators.required,Validators.pattern(/^\d{1,2}$/)]),
      DWT_T: new FormControl("", [Validators.required, Validators.pattern(/^\d{4,6}$/)]),

    });
  }

  submit() {

    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)

      if (this.selectedItem !== undefined) {
        this.nbForm.get('VesselId').setValue(this.selectedItem.VesselId);
        const vesselDetails = this.nbForm.value
        this.vesselService.updateVesselDetail(vesselDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(vesselDetails);
            // this.close();
          }   else {
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
        const vesselDetails = this.nbForm.value
        this.vesselService.addVesselDetail(vesselDetails).subscribe(res => {
          ////debugger;
          if (res == true) {
            this.loading = false


            this.dialogRef.close(vesselDetails);
            // this.close();
          }   else {
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
