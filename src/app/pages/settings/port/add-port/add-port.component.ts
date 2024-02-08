import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { PortService } from '@app-pages/settings/port/port.service';
import { Country, CountryList, Port, PortList } from '@app-pages/settings/setting';
import { ShaService } from '@app-pages/settings/sha/sha.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { CountryService } from '@app-pages/settings/country/country.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-port',
  templateUrl: './add-port.component.html',
  styleUrls: ['./add-port.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError },MessageService]

})






     
export class AddPortComponent {
  loading = false;

  dropdownDirection = [
    {
      id: "N",
      name: "N"
    },
    {
      id: "E",
      name: "E"
    },
    {
      id: "S",
      name: "S"
    },
    {
      id: "W",
      name: "W"
    },

  ]
  formTitle: string = "Add";
  selectedItem: Port;
  dropDownCountrylist: Country[];
  nbForm: FormGroup;
  customErrorStateMatcher = new CustomStateError()
  port: Port[];
  constructor(private formBuilder: FormBuilder,private countryService:CountryService ,private shaService: ShaService, private portService: PortService, protected dialogRef: NbDialogRef<AddPortComponent>, private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      PortId: [''],
      CountryId: [null, [Validators.required]],
      PortName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      DegreesLat: ['', Validators.required],
      MinutesLat: ['', Validators.required],
      SecondsLat: ['', Validators.required],
      DirectionLat: [null, Validators.required],
      DegreesLong:  ['', Validators.required],
      MinutesLong:  ['', Validators.required],
      SecondsLong: ['', Validators.required],
      DirectionLong: [null, Validators.required],
      LatituteDD: [''],
      LongitudeDD: [''],
      PortLatitute: [''],
      PortLongitude: [''],
});
    this.getPortList()
  }

  clearForm() {
  }

  markFormControlsAsUntouched() {
    Object.values(this.nbForm.controls).forEach(control => {
      control.markAsUntouched();
    });
  }

  clearFormErrors() {
    this.nbForm.setErrors(null);
  }


  // clearForm() {
  //   this.nbForm.reset(); // Reset the form controls to their initial values
  //   this.clearFormErrors(); // Clear any existing form errors
  //   this.resetInputFieldValues();
  // }


  calculateDegrees() {
    ////debugger;
    const formvalue = this.nbForm.value;
    const DegreesLat = +formvalue.DegreesLat;
    const MinutesLat = +formvalue.MinutesLat;
    const SecondsLat = +formvalue.SecondsLat;
    const DegreesLong = +formvalue.DegreesLong;
    const MinutesLong = +formvalue.MinutesLong;
    const SecondsLong = +formvalue.SecondsLong;
    if (DegreesLat !== null && MinutesLat !== null && SecondsLat !==null) {
      const calculatedDD = DegreesLat + (MinutesLat / 60) + (SecondsLat / 3600);
      this.nbForm.get('LatituteDD').setValue(calculatedDD)

    }
    if(DegreesLong !== null && MinutesLong !== null && SecondsLong !==null){
      const calculatedDD = DegreesLong + (MinutesLong / 60) + (SecondsLong / 3600);
      this.nbForm.get('LongitudeDD').setValue(calculatedDD)
    }
  }


  ngOnInit(): void {
    this.getDropdownList(1,100,'');
    
      if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      const portLatitude = this.selectedItem.PortLatitute.split(" ")
      const portLongitude = this.selectedItem.PortLongitude.split(" ")
      console.log(portLatitude)
      this.nbForm.setValue({
        PortId: this.selectedItem.PortId,
        CountryId: this.selectedItem.CountryId,
        PortName: this.selectedItem.PortName,
        DegreesLat: portLatitude[1],
        MinutesLat: portLatitude[2],
        SecondsLat: portLatitude[3],
        DirectionLat: portLatitude[0],
        DegreesLong: portLongitude[1],
        MinutesLong: portLongitude[2],
        SecondsLong: portLongitude[3],
        DirectionLong: portLongitude[0],
        LatituteDD: [''],
        LongitudeDD: [''],
        PortLatitute: this.selectedItem.PortLatitute,
        PortLongitude: this.selectedItem.PortLongitude,
      });
      this.calculateDegrees();
    }
  }

  getDropdownList(cPage, nRows, filter) {
    this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
      this.dropDownCountrylist = res.CountryData;
    })
  }
 

  getPortList() {
    this.portService.getPortList(1,100,"").subscribe((res: PortList) => {
      console.log(res)
      this.port = res.PortData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('PortName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.port, 'PortName', this.selectedItem.PortName)]);
        // this.nbForm.get('PortName').updateValueAndValidity();
        // this.nbForm.get('PortLatitute').setValidators([Validators.required, Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/)]);
        // this.nbForm.get('PortLongitude').setValidators([Validators.required, Validators.pattern(/^-?(\d{1,3}\.\d+|\d{1,3})$/)]);

      } else {
        this.nbForm.get('PortName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.port, 'PortName', null)]);
        // this.nbForm.get('PortName').updateValueAndValidity();
        // this.nbForm.get('PortLatitute').setValidators([Validators.required, Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/)]);
        // this.nbForm.get('PortLongitude').setValidators([Validators.required, Validators.pattern(/^-?(\d{1,3}\.\d+|\d{1,3})$/)]);
      }
    })
  }



  close() {
    this.dialogRef.close();
  }
  submit() {
    // debugger;
    const formvalue = this.nbForm.value;
    const DegreesLat = formvalue.DegreesLat;
    const MinutesLat = formvalue.MinutesLat;
    const SecondsLat = formvalue.SecondsLat;
    const DirectionLat = formvalue.DirectionLat;
    const DegreesLong = formvalue.DegreesLong;
    const MinutesLong = formvalue.MinutesLong;
    const SecondsLong = formvalue.SecondsLong;
    const DirectionLong = formvalue.DirectionLong;
    const portLatitute = DirectionLat + " " + DegreesLat + " " + MinutesLat + " " + SecondsLat;
    const portLongitude = DirectionLong + " " + DegreesLong + " " + MinutesLong + " " + SecondsLong;
    this.nbForm.get('PortLatitute').setValue(portLatitute);
    this.nbForm.get('PortLongitude').setValue(portLongitude);
    console.log(portLatitute, "value of Port");
    console.log(portLongitude, "value of portLongitude");

    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)
     
      if (this.selectedItem !== undefined) {
        this.nbForm.get('PortId').setValue(this.selectedItem.PortId);
        const portDetails = this.nbForm.value
        console.log(portDetails,"portDetails")

        this.portService.updatePortDetail(portDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(portDetails);
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
        const portDetails = this.nbForm.value
        console.log(portDetails,"updateportDetails")
        this.portService.addPortDetail(portDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(portDetails);
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


