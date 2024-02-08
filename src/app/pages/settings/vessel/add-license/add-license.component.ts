import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { License } from '@app-pages/settings/vessel/vessel';

import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.scss'],
  providers: [MessageService]
})
export class AddLicenseComponent implements OnInit {
  formTitle: string = "Manage";
  selectedDate: Date;
  selectedItem: License;
  nbForm!: FormGroup;
  loading = false;
  customErrorStateMatcher = new CustomStateError()

  constructor(private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddLicenseComponent>, private vesselService: VesselService, private router: Router, private messageService: MessageService) {

    this.nbForm = new FormGroup({
      VesselId: new FormControl(""),
      LicenseId: new FormControl(""),
      LicenseStartDate: new FormControl("", [Validators.required]),
      LicenseEndDate: new FormControl("", [Validators.required,]),
      // LicenseAddedBy: new FormControl("", [Validators.required]),


    }, { validators: this.customErrorStateMatcher.dateRangeValidator('LicenseStartDate','LicenseEndDate') });
  }
  // dateFormatter(date: Date): string {
  //   // Format the date value as per your desired format
  //   // For example, to display in 'dd/MM/yyyy' format:
  //   return formatDate(date, 'dd/MM/yyyy', 'en');
  // }
    dateRangeValidator(control: AbstractControl) {
      //debugger
      const startDate = control.get('LicenseStartDate').value;
      const endDate = control.get('LicenseEndDate').value;
      if (!endDate) {
        control.get('LicenseEndDate').setErrors({ invalidDateRange: false, required: true });
        return { required: true }
      }
      if (startDate && endDate && startDate >= endDate) {
        control.get('LicenseEndDate').setErrors({ invalidDateRange: true, required: false });
        return { invalidDateRange: true };
      }
      control.get('LicenseEndDate').setErrors(null);
      return null

    }

  ngOnInit(): void {

    console.log(this.selectedItem.VesselId, "this.selectedItem.VesselId,")
    if (this.selectedItem !== undefined) {

      this.nbForm.setValue({
        VesselId: this.selectedItem.VesselId,
        LicenseId: "",
        LicenseStartDate: "",
        LicenseEndDate: "",
        // LicenseAddedBy: "",

      });
    }
  }
  // onDatePickerChange() {
  //   const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);

  //   // Get the user's time zone
  //   const userTimeZone = moment.tz.guess();

  //   // Convert the selected date to the user's time zone
  //   const selectedDateInUserTimeZone = moment(selectedDate).tz(userTimeZone);

  //   // Format the date to 'YYYY-MM-DD' for display
  //   const selectedDateFormatted = selectedDateInUserTimeZone.format('YYYY-MM-DD');
  //   this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);
  // }


  // onDatePickerChange() {
  //   const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);

  //   // Get the user's local time zone offset in minutes
  //   const timeZoneOffset = selectedDate.getTimezoneOffset();

  //   // Adjust the date by subtracting the time zone offset in minutes
  //   selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);

  //   // Format the date to 'YYYY-MM-DD' for display
  //   const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
  //   this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);
  //   }

  close() {
    this.dialogRef.close();
  }
  submit() {
    ////debugger;


    if (this.nbForm.valid) {
      this.loading = true

      const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);
      const timeZoneOffset = selectedDate.getTimezoneOffset();
      selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
      const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
      this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);
      const EndselectedDate: Date = new Date(this.nbForm.get('LicenseEndDate').value);
      const EndtimeZoneOffset = EndselectedDate.getTimezoneOffset();
      EndselectedDate.setMinutes(EndselectedDate.getMinutes() - EndtimeZoneOffset);
      const EndselectedDateFormatted = EndselectedDate.toISOString().split('T')[0];
      this.nbForm.get('LicenseEndDate').setValue(EndselectedDateFormatted);

      this.nbForm.get('LicenseId').setValue(this.selectedItem.LicenseId);
      const licenseDetails = this.nbForm.value
      this.vesselService.manageLicense(licenseDetails).subscribe(res => {
        if (res == true) {
          this.loading = false

          this.dialogRef.close(licenseDetails);
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
      this.nbForm.markAllAsTouched();
    }
  }
  


  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}
