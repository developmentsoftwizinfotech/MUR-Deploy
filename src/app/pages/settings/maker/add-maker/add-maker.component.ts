import { EquipmentCategoryService } from './../../../inventory/equipment-category/equipment-category.service';

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, AsyncValidatorFn, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Cargo, CargoList, Maker } from '@app-pages/settings/setting';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { root } from 'rxjs/internal-compatibility';
import { MakerService } from '../maker.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-maker',
  templateUrl: './add-maker.component.html',
  styleUrls: ['./add-maker.component.scss'],
  providers: [
    { provide: root, useClass: CustomStateError }, MessageService
  ]
})
export class AddMakerComponent implements OnInit {
  loading = false;
  formTitle: string = "Add";
  selectedItem: Maker;
  dropDownEquipmentCategorylist: any[] = []
  dropDownEquipmentlist: any[] = []
  existingValues: any[] = [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Nitesh'
    }
  ];
  customErrorStateMatcher = new CustomStateError()
  makerData: Maker[] | null;
  nbForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private equipmentCategoryService: EquipmentCategoryService, private makerService: MakerService, protected dialogRef: NbDialogRef<AddMakerComponent>, private router: Router, private messageService: MessageService
  ) {
    // this.getCargoListRecords();
    this.getMakerList()
    this.nbForm = this.formBuilder.group({
      MakerId: [''],
      EquipmentCategoryId: [null, [Validators.required]],
      EquipmentId: [null, [Validators.required]],
      MakerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
  }
  // getCargoListRecords() {
  //   this.makerService.getCargoList(1,100,"").subscribe((res: CargoList) => {
  //     console.log(res)
  //     this.makerData = res.makerData
  //     if (this.selectedItem !== undefined) {
  //       this.nbForm.get('MakerName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.makerData, 'MakerName',this.selectedItem.MakerName)]);
  //       this.nbForm.get('MakerName').updateValueAndValidity();
  //     } else {
  //       this.nbForm.get('MakerName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.makerData, 'MakerName', null)]);
  //       this.nbForm.get('MakerName').updateValueAndValidity();
  //     }

  //   })
  // }

  getMakerList() {
    ////debugger;
    this.makerService.getMakerList().subscribe((res: Maker[]) => {
      ////debugger;
      this.makerData = res;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('MakerName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.makerData, 'MakerName', this.selectedItem.MakerName)]);
        this.nbForm.get('MakerName').updateValueAndValidity();
      } else {
        this.nbForm.get('MakerName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.makerData, 'MakerName', null)]);
        this.nbForm.get('MakerName').updateValueAndValidity();
      }


    })
  }
  ngOnInit(): void {
    // this.getCargoListRecords()
    this.getMakerList()
    this.getEquipmentCategoryRecords()
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.getEquipmentRecords(this.selectedItem.EquipmentCategoryId);

      this.nbForm.setValue({
        MakerId: this.selectedItem.MakerId,
        MakerName: this.selectedItem.MakerName,
        EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
        EquipmentId: this.selectedItem.EquipmentId,
      });

    }
  }

  close() {
    this.dialogRef.close();
  }

  clearForm() {
    this.nbForm = this.formBuilder.group({
      MakerId: [''],
      MakerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      EquipmentCategoryId: [null, [Validators.required]],
      EquipmentId: [null, [Validators.required]],
    });
    // this.getCargoListRecords();
    this.getMakerList();
  }


  async getEquipmentCategoryRecords() {
    debugger;
    let categoryId;
    this.nbForm.get('EquipmentId').setValue(null);

    if (this.selectedItem) {
      categoryId = this.nbForm.value.EquipmentCategoryId;

    } else {
      categoryId = this.nbForm.value.EquipmentCategoryId;


    }
    await this.equipmentCategoryService.getEquipmentCategoryList().subscribe((res: any) => {
      this.dropDownEquipmentCategorylist = res;
      if (categoryId) {

          this.getEquipmentRecords(categoryId);

      }
    })
  }
  getEquipmentRecords(categoryId: number) {
    this.makerService.getEquipmentWithId(categoryId).subscribe((res: any) => {
      this.dropDownEquipmentlist = res;

    })
  }

  submit() {
    debugger;
    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      if (this.selectedItem !== undefined) {
        this.nbForm.get('MakerId').setValue(this.selectedItem.MakerId);
        const makerDetails = this.nbForm.value
        this.makerService.updateMakerDetail(makerDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(makerDetails);
          } else {
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
        const makerDetails = this.nbForm.value
        this.makerService.addMakerDetail(makerDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(makerDetails);
          } else {
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


