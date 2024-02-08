import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { Applicability, ApplicabilityList, CargoList, CircularCategory, CircularCategoryList, Country, CountryList, PortList } from '@app-pages/settings/setting';
import { ShoreCleaningService } from '@app-pages/settings/shore-cleaning/shore-cleaning.service';
import { ConfirmationService } from 'primeng/api';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { Cargo, Port } from '@app-pages/settings/setting';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { PortService } from '@app-pages/settings/port/port.service';
import { ApplicabilityService } from '@app-pages/settings/applicability/applicability.service';
import { CargoService } from '@app-pages/settings/cargo/cargo.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Circular } from '@app-pages/circular/circular';
import { CircularService } from "@app-pages/circular/circular.service";
import { FileUpload } from 'primeng/fileupload';
import { environment } from '@env/environment.prod';
import { CountryService } from '@app-pages/settings/country/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-circular',
  templateUrl: './add-circular.component.html',
  styleUrls: ['./add-circular.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class AddCircularComponent implements OnInit {
  // @ViewChild('fileUpload') fileUpload: FileUpload;
  public Editor = ClassicEditor;
  public editorData: string = '';
  formTitle: string = "Add";
  selectedItem: Circular;
  circularLinkPDF: string;
  nbForm: FormGroup;
  dropDownCountrylist: Country[];
  dropDownVesselList: Vessel[];
  dropDownPortList: Port[];
  dropDownCargoList: Cargo[];
  dropDownApplicabilityList: Applicability[];
  dropDownCircularList: CircularCategory[];
  formData: FormData;
  base64File: any
  fileName: any;
  circular: CircularCategory[];

  loading:boolean=false;



  constructor(private router: Router, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private shoreCleaningService: ShoreCleaningService,
    private circularService: CircularService,
    private vesselService: VesselService,
    private applicabilityService: ApplicabilityService,
    private cargoService: CargoService,
    private portService: PortService,
    private countryService: CountryService,
    private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddCircularComponent>) {
    this.nbForm = this.formBuilder.group({
      CircularId: [''],
      CategoryId: [null, Validators.required],
      ApplicableId: [null, Validators.required],
      VesselName: [''],
      CargoName: [''],
      PortName: [''],
      Attechment: [''],
      VesselId: [null, Validators.required],
      CargoId: [null, Validators.required],
      PortId: [null, Validators.required],
      Text: [''],
      Title: ['', [Validators.required, Validators.maxLength(120)]],
      AutoArchiveDate: [''],
      FilePath: [''],
      IsArchived: false
    });
  }

  ngOnInit(): void {
    // this.nbForm.get('Text').setValue(this.selectedItem?.Text || '');
    // this.getDropdownList(1, 100, '');
    if (this.selectedItem !== undefined) {
      this.getPDFLink(this.selectedItem.CircularId);
      console.log(this.selectedItem, "this.selectedItem")
      this.formTitle = "Update"
      const setCargoName = this.selectedItem.CargoName.split(",");
      const setVesselName = this.selectedItem.VesselName.split(",");
      const setPortName = this.selectedItem.PortName.split(",");
      console.log(this.selectedItem)
      this.nbForm.setValue({
        CircularId: this.selectedItem.CircularId,
        CategoryId: this.selectedItem.CategoryId,
        ApplicableId: this.selectedItem.ApplicableId,
        VesselName: this.selectedItem.VesselName,
        CargoName: this.selectedItem.CargoName,
        PortName: this.selectedItem.PortName,
        VesselId: setVesselName,
        CargoId: setCargoName,
        PortId: setPortName,
        Attechment: this.selectedItem.Attechment,
        Text: this.selectedItem.Text,
        Title: this.selectedItem.Title,
        AutoArchiveDate: this.selectedItem.AutoArchiveDate,
        FilePath: this.selectedItem.FilePath,
        IsArchived: this.selectedItem.IsArchived
      });
    }
    // this.editorData = this.selectedItem.Text
    this.getApplicabilityListRecords(1,100,'')
    this.getCargoListRecords(1,100,'')
    this.getVesselListRecords(1,100,'')
    this.getPortList(1,100,'')
    this.getCircularCategoryList(1,100,'')

  }

   getApplicabilityListRecords(cPage, nRows, filter){
    this.applicabilityService.getApplicabilityList(cPage, nRows, filter).subscribe((res: ApplicabilityList) => {
      this.dropDownApplicabilityList = res.ApplicableData;
    })
  }

  getCargoListRecords(cPage, nRows, filter){
    this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: CargoList) => {
      debugger
      this.dropDownCargoList = res.CargoData
      // console.log(this.cargoDropdown ,'cargoDropdown')
    })
  }

  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.dropDownVesselList = res.VesselData;
    })
  }

  getPortList(cPage, nRows, filter) {
    // console.log(filter.target.value,"value")
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
      this.dropDownPortList = res.PortData;
      // console.log(this.portDropdown, "portDropdown")
    })
  }

  getCircularCategoryList(cPage, nRows, filter) {
      this.circularService.getCircularCategoryList(cPage, nRows, filter).subscribe((res: CircularCategoryList) => {
      this.dropDownCircularList = res.CircularCategoryData;
      console.log(this.circular,"this.circular")
    })
  }


  clearForm() {
    this.nbForm.reset()
    this.nbForm.setValue({
      CircularId: this.selectedItem.CircularId,
      CategoryId: null,
      ApplicableId: null,
      VesselName: null,
      CargoName: null,
      PortName: null,
      VesselId: null,
      CargoId: null,
      PortId: null,
      Text: null,
      Title: null,
      Attechment: null,
      AutoArchiveDate: null,
      FilePath: null,
      IsArchived: false
    });
  }
  // getDropdownList(cPage, nRows, filter) {
  //      this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
  //     this.dropDownVesselList = res.VesselData
  //   })

  //   this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
  //     this.dropDownCountrylist = res.CountryData;
  //   })
  //   this.cargoService.getCargoList(1, 10, "").subscribe((res: CargoList) => {
  //     this.dropDownCargoList = res.CargoData
  //   })
  //    this.portService.getPortList(1, 10, "").subscribe((res: PortList) => {
  //     console.log(res)
  //     this.dropDownPortList = res.PortData;
  //   })
  //    this.circularService.getCircularCategoryList(cPage, nRows, filter).subscribe((res: any) => {
  //     console.log(res,"res getCircularCategoryList")
  //     this.dropDownCircularList = res.CircularCategoryData;
  //   })
    // this.circularService.getCircularList(cPage, nRows, filter).subscribe((res: CircularCategoryList) => {
      // this.circular = res.CircularCategoryData;

      // this.circularService.getCircularList(cPage, nRows, filter).subscribe((res: CircularCategoryList) => {
      //   this.dropDownCircularList = res.CircularCategoryData;
      // })


  // }


  onUpload(event: FileUpload) {
    //debugger
    try {
      const file = event.files[0]
      console.log(file, "primeng")
      this.convertToBase64(file);
    } catch (error) {
      this.fileName = null;
      this.base64File = null;
    }
    console.log(this.nbForm.value.FilePath)
  }
  pdfSrc: string;
  convertToBase64(file: File) {
    //debugger
    this.nbForm.get('Attechment')?.setValue(file.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // this.pdfSrc = base64String
      const base64Value = base64String.replace("data:application/pdf;base64,", "")
      this.nbForm.get('FilePath')?.setValue(base64Value)
    };
    reader.readAsDataURL(file);
  }

  close() {
    this.dialogRef.close();
  }

  getPDFLink(circularId: number) {
    ////debugger;
    this.circularService.getPDFList(circularId).subscribe((res: any) => {
      //debugger
      this.circularLinkPDF = environment.basePDFUrl + res.Attechment
      console.log(this.circularLinkPDF, "circularLinkPDF")
    })
  }
  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true
      const formValue = this.nbForm.value
      const setCargoName = formValue.CargoId.join(",");
      this.nbForm.get('CargoName').setValue(setCargoName);
      const setVesselName = formValue.VesselId.join(",");
      this.nbForm.get('VesselName').setValue(setVesselName);
      const setPortName = formValue.PortId.join(",");
      this.nbForm.get('PortName').setValue(setPortName);
      const circularDetails = this.nbForm.value
      console.log(this.nbForm.value)
      if (this.selectedItem !== undefined) {
        this.circularService.updateCircularDetail(circularDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(circularDetails);
            this.close();
          }  else {
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
        const circularDetails = this.nbForm.value
        this.circularService.addCircularDetail(circularDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(circularDetails);
            this.close();

          }  else {
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






