import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

import { Country, CountryList, ShoreCleaning, ShoreCleaningList } from '@app-pages/settings/setting';
import { ShoreCleaningService } from '@app-pages/settings/shore-cleaning/shore-cleaning.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { CountryService } from '@app-pages/settings/country/country.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ngx-add-cleaning-gang',
  templateUrl: './add-cleaning-gang.component.html',
  styleUrls: ['./add-cleaning-gang.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError },MessageService]















})
export class AddCleaningGangComponent implements OnInit {




  loading = false;
  dropDownCountrylist: Country[];
  formTitle: string = "Add";
  selectedItem: ShoreCleaning;
  customErrorStateMatcher = new CustomStateError()
  nbForm: FormGroup;
  shoreCleaning: ShoreCleaning[];
  country: [{ CountryId: number; CountryName: string; CountryCode: string; CreatedDate: Date; UpdatedDate: Date; DeletedDate: Date; Active: boolean; }];



  constructor(private countryService:CountryService, private shoreCleaningService: ShoreCleaningService, private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddCleaningGangComponent>, private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      ShoreCleaningGangId: [''],
      ShoreCleaningGangCompanyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      CountryId: [null, Validators.required],

      CountriesCovered1: ['', Validators.required],
      CountriesCovered: ['',],
      PICName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      PICPrimaryEmail: ['', [Validators.required, Validators.email]],
      PICSecondaryEmail: ['',[Validators.email]],
      PICPrimaryPhone: ['', [Validators.required, Validators.pattern(/^\d{3}\d{3}\d{4}$/)]],
      PICSecondaryPhone: [''],


    });
    this.getShoreCleanListRecords()
  }




  ngOnInit(): void {
    this.getCountryListRecords(1,100,'');

    if (this.selectedItem !== undefined) {
      const countriesCovered = this.selectedItem.CountriesCovered;
      const selectedCovered = countriesCovered.split(",")
      this.formTitle = "Update"
      this.nbForm.setValue({
        ShoreCleaningGangId: this.selectedItem.ShoreCleaningGangId,
        ShoreCleaningGangCompanyName: this.selectedItem.ShoreCleaningGangCompanyName,
        CountryId: this.selectedItem.CountryId,

        CountriesCovered: this.selectedItem.CountriesCovered,
        CountriesCovered1: selectedCovered,
        PICName: this.selectedItem.PICName,
        PICPrimaryEmail: this.selectedItem.PICPrimaryEmail,
        PICSecondaryEmail: this.selectedItem.PICSecondaryEmail,
        PICPrimaryPhone: this.selectedItem.PICPrimaryPhone,
        PICSecondaryPhone: this.selectedItem.PICSecondaryPhone,

      });
    }
  }
  // getDropdownList(cPage, nRows, filter) {
  //   this.shoreCleaningService.getCountrylist().subscribe((res: any) => {
  //     this.dropDownCountrylist = res;
  //     console.log(this.dropDownCountrylist)
  //   })
  // }
  getCountryListRecords(cPage, nRows, filter) {
    this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
      this.dropDownCountrylist = res.CountryData;

    })
  }
  getShoreCleanListRecords() {
    this.shoreCleaningService.getShoreCleaningList(1,100,'').subscribe((res: ShoreCleaningList) => {
      console.log(res)
      this.shoreCleaning = res.ShoreCleaningGangData;
            if (this.selectedItem !== undefined){
        this.nbForm.get('ShoreCleaningGangCompanyName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.shoreCleaning, 'ShoreCleaningGangCompanyName', this.selectedItem.ShoreCleaningGangCompanyName)]);
        // this.nbForm.get('ShoreCleaningGangCompanyName').updateValueAndValidity();
      } else {
        this.nbForm.get('ShoreCleaningGangCompanyName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.shoreCleaning, 'ShoreCleaningGangCompanyName', null)]);
        // this.nbForm.get('ShoreCleaningGangCompanyName').updateValueAndValidity();
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
      this.customErrorStateMatcher.trimFormValues(this.nbForm);
      const countriesCovered = this.nbForm.value.CountriesCovered1;
      const changeCountriesCovered = countriesCovered.join(",");
      this.nbForm.get('CountriesCovered').setValue(changeCountriesCovered);
      const shoreCleaningDetails = this.nbForm.value
      if (this.selectedItem !== undefined) {
        // this.nbForm.get('ShoreCleaningGangId').setValue(this.selectedItem.ShoreCleaningGangId);

        this.shoreCleaningService.updateShoreCleaningDetail(shoreCleaningDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(shoreCleaningDetails);
            // this.close();
          }    else {
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
        // const shoreCleaningDetails = this.nbForm.value
        this.shoreCleaningService.addShoreCleaningDetail(shoreCleaningDetails).subscribe(res => {
          if (res == true) {

            this.loading = false
            this.dialogRef.close(shoreCleaningDetails);
            // this.close();
          }    else {
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









