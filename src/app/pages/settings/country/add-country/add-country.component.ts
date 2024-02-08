import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {  Country, CountryList } from '@app-pages/settings/setting';

import { CountryService } from '@app-pages/settings/country/country.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss'] ,
  providers: [{ provide: root, useClass: CustomStateError },MessageService ]
   
})
export class AddCountryComponent {
  loading = false;




 

           



  customErrorStateMatcher = new CustomStateError()

    formTitle: string = "Add";
   
    selectedItem: Country;
    existingValues: string[] = ['apple', 'banana', 'cherry'];
      nbForm: FormGroup;
  country: Country[];
      constructor(private formBuilder: FormBuilder,private countryService:CountryService,protected dialogRef: NbDialogRef<AddCountryComponent>, private router: Router, private messageService: MessageService
        ){
        this.nbForm = this.formBuilder.group({
          CountryId: [''],
          CountryName: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
       
        });
        this.getCargoListRecords()
      }
   
  
   
  
    
      getCargoListRecords() {
        this.countryService.getCountryList(1,100,'').subscribe((res: CountryList) => {
          console.log(res)
          this.country = res.CountryData;
          if (this.selectedItem !== undefined) {
            this.nbForm.get('CountryName').setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.country, 'CountryName',this.selectedItem.CountryName)]);
            // this.nbForm.get('CountryName').updateValueAndValidity();
          } else {
            this.nbForm.get('CountryName').setValidators([Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.country, 'CountryName', null)]);
            // this.nbForm.get('CountryName').updateValueAndValidity();
          }
           })
      }
       
  
      ngOnInit(): void {
    
        
        if (this.selectedItem !== undefined) {
          this.formTitle = "Update"
          this.nbForm.setValue({
            CountryId:this.selectedItem.CountryId,
            CountryName: this.selectedItem.CountryName,
          });
        }
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
            this.nbForm.get('CountryId').setValue(this.selectedItem.CountryId);

            const CountryDetails = this.nbForm.value

            this.countryService.updateCountryDetail(CountryDetails).subscribe(res => {
              if (res == true) {
                this.loading = false

                this.dialogRef.close(CountryDetails);
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
            const CountryDetails = this.nbForm.value
    
            this.countryService.addCountryDetail(CountryDetails).subscribe(res => {
              if (res == true) {
                this.loading = false

                this.dialogRef.close(CountryDetails);
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
    
        }else{
          this.nbForm.markAllAsTouched();
        }
      }
  
      
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  
    }
    
  
