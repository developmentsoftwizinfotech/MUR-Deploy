
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { Country, CountryList } from '@app-pages/settings/setting';
import { ShoreCleaningService } from '@app-pages/settings/shore-cleaning/shore-cleaning.service';
import { ConfirmationService } from 'primeng/api';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { root } from 'rxjs/internal-compatibility';
import { Vendor, VendorList } from '@app-pages/inventory/inventory';
import { VendorService } from '@app-pages/inventory/vendor/vendor.service';
import { CountryService } from '@app-pages/settings/country/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss'],
  providers: [MessageService, ConfirmationService,

    { provide: root, useClass: CustomStateError }
  ]
})
export class AddVendorComponent implements OnInit {

  dropDownCountrylist: Country[];
  formTitle: string = "Add";
  selectedItem: any;
  nbForm: FormGroup;
  showPassword = false;
  customErrorStateMatcher = new CustomStateError()
  vendor: Vendor[];
  loading:boolean=false
  constructor(
    private countryService :CountryService,
    private shoreCleaningService: ShoreCleaningService,
    private vendorService: VendorService,
    private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddVendorComponent>, private router: Router, private messageService: MessageService) {
      this.getVendorListRecords()
    this.nbForm = this.formBuilder.group({
      VendorId:[null],
      VendorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      VendorAddress: ['', [Validators.required,, Validators.minLength(2), Validators.maxLength(250)]],
      CountryId: [null, Validators.required],
      VendorPrimaryEmail: ['', [Validators.required, Validators.email]],
      VendorSecondaryEmail: [''],
      VendorPhonelines: [''],
      Password: [''],
      VendorPIC: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],

    });
  }
  ngOnInit(): void {
    this.getDropdownList(1,100,'');
    if (this.selectedItem !== undefined) {
          this.formTitle = "Update"
      this.nbForm.setValue({
        VendorId:this.selectedItem.VendorId,
        VendorName: this.selectedItem.VendorName,
        VendorAddress: this.selectedItem.VendorAddress,
        CountryId: this.selectedItem.CountryId,
        VendorPrimaryEmail: this.selectedItem.VendorPrimaryEmail,
        VendorSecondaryEmail:this.selectedItem.VendorSecondaryEmail,
        VendorPhonelines:this.selectedItem.VendorPhonelines,
        VendorPIC:this.selectedItem.VendorPIC,
        Password:this.selectedItem.Password,
      });
    }
  }
  getDropdownList(cPage, nRows, filter) {
    this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
      this.dropDownCountrylist = res.CountryData;
      console.log(this.dropDownCountrylist)
    })
  }




  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  getVendorListRecords() {
    //debugger
    this.vendorService.getVendorList(1,100,"").subscribe((res: VendorList) => {
      console.log(res)
      this.vendor = res.VendorData;

      if (this.selectedItem !== undefined) {
        this.nbForm.get('VendorName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.vendor, 'VendorName',this.selectedItem.VendorName)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      } else {
        this.nbForm.get('VendorName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.vendor, 'VendorName', null)]);
        // this.nbForm.get('CargoName').updateValueAndValidity();
      }
    })
  }

  close() {

    this.dialogRef.close();
  }
  submit() {
    console.log(this.nbForm.value)

    if (this.nbForm.valid) {
      this.loading=true;
      this.customErrorStateMatcher.trimFormValues(this.nbForm)

      if (this.selectedItem !== undefined) {
        this.nbForm.get('VendorId').setValue(this.selectedItem.VendorId);
        const vendorDetails = this.nbForm.value
        this.vendorService.updateVendorDetail(vendorDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(vendorDetails);

          }else {
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
        //debugger
        const vendorDetails = this.nbForm.value
        this.vendorService.addVendorDetail(vendorDetails).subscribe(res => {
          //debugger
          if (res == true) {
            this.loading = false
        this.dialogRef.close(vendorDetails);

          }else {
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





