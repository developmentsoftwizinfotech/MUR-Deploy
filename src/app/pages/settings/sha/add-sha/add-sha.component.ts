import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ShaService } from '@app-pages/settings/sha/sha.service';
import { CountryList, SHA, SHAList } from '@app-pages/settings/setting';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { CountryService } from '@app-pages/settings/country/country.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ngx-add-sha',
  templateUrl: './add-sha.component.html',
  styleUrls: ['./add-sha.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError },MessageService ]

})
export class AddShaComponent implements OnInit{

  loading = false;
  dropDownCountrylist: any;
  nbForm: FormGroup;
  formTitle: string = "Add";
  selectedItem: any;
  SHA: SHA[];
  customErrorStateMatcher = new CustomStateError()
  constructor(private countryService:CountryService,private formBuilder: FormBuilder, private shaService: ShaService, protected dialogRef: NbDialogRef<AddShaComponent>, private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      SHAId: [''],
      SHAName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
      CountryId: [null, Validators.required],
      CountriesCovered1: ['', Validators.required],
      CountriesCovered: "",
    });
    this.getSHAListRecords()
  }

  ngOnInit(): void {
    this.getCountryListRecords(1,100,'');

    if (this.selectedItem !== undefined) {
      const countriesCovered = this.selectedItem.CountriesCovered;
      const selectedCovered = countriesCovered.split(",")
      this.formTitle = "Update"
      this.nbForm.setValue({
        SHAId: this.selectedItem.SHAId,
        SHAName: this.selectedItem.SHAName,
        CountryId: this.selectedItem.CountryId,
        CountriesCovered1: selectedCovered,
        CountriesCovered: "",

      });
    }
  }

  getSHAListRecords() {
    this.shaService.getSHAList(1,100,'').subscribe((res: SHAList) => {
      console.log(res)
      this.SHA = res.SHAData;


     if (this.selectedItem !== undefined) {
      this.nbForm.get('SHAName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.SHA, 'SHAName',this.selectedItem.SHAName)]);

    } else {
      this.nbForm.get('SHAName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.SHA, 'SHAName', null)]);

    }

    })
  }
  // getDropdownList() {
  //   this.shaService.getCountrylist().subscribe((res: any) => {
  //     this.dropDownCountrylist = res;
  //   })
    // }
    getCountryListRecords(cPage, nRows, filter) {
      this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
        this.dropDownCountrylist = res.CountryData;

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
      const countriesCovered = this.nbForm.value.CountriesCovered1;
      const changeCountriesCovered = countriesCovered.join(",");
      this.nbForm.get('CountriesCovered').setValue(changeCountriesCovered);

      if (this.selectedItem !== undefined) {
        this.nbForm.get('SHAId').setValue(this.selectedItem.SHAId);
        const shaDetails = this.nbForm.value
        this.shaService.updateSHADetail(shaDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(shaDetails);
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
        const shaDetails = this.nbForm.value
        this.shaService.addSHADetail(shaDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(shaDetails);
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

    }else{
      this.nbForm.markAllAsTouched();
    }
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

}







