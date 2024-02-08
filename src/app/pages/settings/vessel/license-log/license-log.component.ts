import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { NbComponentStatus, NbDialogRef, NbToastrService } from "@nebular/theme";
import { License } from "@app-pages/settings/vessel/vessel";
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
@Component({
  selector: 'ngx-license-log',
  templateUrl: './license-log.component.html',
  styleUrls: ['./license-log.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class LicenseLogComponent implements OnInit {
  selectedItem: any;
  cleaningForm: FormGroup;
  plasceholder: { field: string; header: string; }[];
  geeks: boolean;
  products: any;
  loading: boolean = true;
  display: boolean = false;
  visible: boolean;
  private index: number = 0;
  saveEnable: boolean;
  plac: { p1: string; };
  cols: { field: string; header: string; }[];
  totleWeightage: number;
  items: { label: string; }[];
  statuses: SelectItem[];
  // clonedProducts: { [s: string]: Product } = {};
  license: License;
  editMode: boolean = false;
  checkListRecord: boolean = false;
  emptymessage: string;
 
  constructor(
   private vesselService:VesselService,
    protected dialogRef: NbDialogRef<LicenseLogComponent>,
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
  ) {

    this.cleaningForm = this.fb.group({
      LicenseStartDate: ["", Validators.required],
      LicenseEndDate: ["", Validators.required],
    });
  }
 
  ngOnInit() {
    this.getLicenseListRecords() 
    this.cleaningForm.setValue({
      LicenseStartDate: this.license.LicenseStartDate,
      LicenseEndDate: this.license.LicenseEndDate
    });

    this.primengConfig.ripple = true;
  }


  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Toast: ${++this.index}`, { status });
  }
  submit() {
    if (this.cleaningForm.invalid) {
      this.cleaningForm.markAllAsTouched();
    } else {
      this.products.push(this.cleaningForm.value);
      this.show()
    }
  }

  clearForm() {
    this.cleaningForm.reset();
  }
  product: any;
  deleteProduct(product: any) {
    ////debugger;
    console.log(this.products, "this.products");
    const index = this.products.findIndex((obj) => obj == product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    console.log(this.products);
  }
  close() {
    this.dialogRef.close();
  }


  editedRowIndex: number = -1;
  editedRowData: any = {};

  // Other component code...

 







  onRowEditInit(product: any) {
    // this.clonedProducts[product.id] = { ...product };
  }
  onRowEditSave(product: any) {
    // if (product.price > 0) {
    //   delete this.clonedProducts[product.id];
    //   this.messageService.add({
    //     severity: "success",
    //     summary: "Success",
    //     detail: "Product is updated",
    //   });
    // } else {
    //   this.messageService.add({
    //     severity: "error",
    //     summary: "Error",
    //     detail: "Invalid Price",
    //   });
    // }
  }


  


  onRowEditCancel(product: any, index: number) {
    // this.products[index] = this.clonedProducts[product.id];
    // delete this.clonedProducts[product.id];
  }
  updateDetails(editDetails:License ) {
  if (this.selectedItem !== undefined) {
    let licenseDetail
    this.vesselService.updateLicenseDetail(editDetails).subscribe(res => {
      if (res == true) {

        this.dialogRef.close(editDetails);
        // this.close();
      }
    })
  } }

  getLicenseListRecords() {
    this.vesselService.geLicenseList(this.selectedItem).subscribe((res: License) => {
    console.log(res,"fff")
      this.license = res;
      if(res.LicenseEndDate == null){
        this.emptymessage = 'No Record Found'

  }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }


}





// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { NbDialogRef } from '@nebular/theme';

// import { formatDate } from '@angular/common';
// import * as moment from 'moment';


// export class AddLicenseComponent {
//   formTitle: string = "Manage";
//   selectedDate: Date;
//   selectedItem: License;
//   nbForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddLicenseComponent>, private vesselService: VesselService,) {

//     this.nbForm = new FormGroup({
//       VesselId: new FormControl(""),
//       LicenseId: new FormControl(""),
//       LicenseStartDate: new FormControl("", [Validators.required]),
//       LicenseEndDate: new FormControl("", [Validators.required,]),
//       // LicenseAddedBy: new FormControl("", [Validators.required]),


//     }, { validators: this.dateRangeValidator });
//   }
//   // dateFormatter(date: Date): string {
//   //   // Format the date value as per your desired format
//   //   // For example, to display in 'dd/MM/yyyy' format:
//   //   return formatDate(date, 'dd/MM/yyyy', 'en');
//   // }
//   dateRangeValidator(control: AbstractControl) {
//     //debugger
//     const startDate = control.get('LicenseStartDate').value;
//     const endDate = control.get('LicenseEndDate').value;
//     if (!endDate) {
//       control.get('LicenseEndDate').setErrors({ invalidDateRange: false, required: true });
//       return { required: true }
//     }
//     if (startDate && endDate && startDate >= endDate) {
//       control.get('LicenseEndDate').setErrors({ invalidDateRange: true, required: false });
//       return { invalidDateRange: true };
//     }
//     control.get('LicenseEndDate').setErrors(null);
//     return null

//   }

//   ngOnInit(): void {

//     console.log(this.selectedItem.VesselId, "this.selectedItem.VesselId,")
//     if (this.selectedItem !== undefined) {

//       this.nbForm.setValue({
//         VesselId: this.selectedItem.VesselId,
//         LicenseId: "",
//         LicenseStartDate: "",
//         LicenseEndDate: "",
//         // LicenseAddedBy: "",

//       });
//     }
//   }
//   // onDatePickerChange() {
//   //   const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);

//   //   // Get the user's time zone
//   //   const userTimeZone = moment.tz.guess();

//   //   // Convert the selected date to the user's time zone
//   //   const selectedDateInUserTimeZone = moment(selectedDate).tz(userTimeZone);

//   //   // Format the date to 'YYYY-MM-DD' for display
//   //   const selectedDateFormatted = selectedDateInUserTimeZone.format('YYYY-MM-DD');
//   //   this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);
//   // }


//   // onDatePickerChange() {
//   //   const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);

//   //   // Get the user's local time zone offset in minutes
//   //   const timeZoneOffset = selectedDate.getTimezoneOffset();

//   //   // Adjust the date by subtracting the time zone offset in minutes
//   //   selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);

//   //   // Format the date to 'YYYY-MM-DD' for display
//   //   const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
//   //   this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);
//   //   }

//   close() {
//     this.dialogRef.close();
//   }
//   submit() {
//     ////debugger;
  

//     const selectedDate: Date = new Date(this.nbForm.get('LicenseStartDate').value);

//     // Get the user's local time zone offset in minutes
//     const timeZoneOffset = selectedDate.getTimezoneOffset();

//     // Adjust the date by subtracting the time zone offset in minutes
//     selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);

//     // Format the date to 'YYYY-MM-DD' for display
//     const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
//     this.nbForm.get('LicenseStartDate').setValue(selectedDateFormatted);


//     const EndselectedDate: Date = new Date(this.nbForm.get('LicenseEndDate').value);

//     // Get the user's local time zone offset in minutes
//     const EndtimeZoneOffset = EndselectedDate.getTimezoneOffset();

//     // Adjust the date by subtracting the time zone offset in minutes
//     EndselectedDate.setMinutes(EndselectedDate.getMinutes() - EndtimeZoneOffset);

//     // Format the date to 'YYYY-MM-DD' for display
//     const EndselectedDateFormatted = EndselectedDate.toISOString().split('T')[0];
//     this.nbForm.get('LicenseEndDate').setValue(EndselectedDateFormatted);

//     if (this.nbForm.valid) {
//       const licenseDetails = this.nbForm.value

//       this.vesselService.manageLicense(licenseDetails).subscribe(res => {
//         if (res == true) {

//           this.dialogRef.close(licenseDetails);
//           // this.close();
//         }
//       })

//     } else {
//       this.nbForm.markAllAsTouched();
//     }
//   }
// }
