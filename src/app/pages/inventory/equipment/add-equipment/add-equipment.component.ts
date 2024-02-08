import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipment } from '@app-pages/inventory/inventory';
import { NbDialogRef } from '@nebular/theme';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { EquipmentService } from '@app-pages/inventory/equipment/equipment.service';
import { EquipmentCategory, Unit } from '@app-pages/settings/setting';
import { EquipmentCategoryService } from '@app-pages/inventory/equipment-category/equipment-category.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { root } from 'rxjs/internal-compatibility';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
  providers: [MessageService, ConfirmationService,
    { provide: root, useClass: CustomStateError }
  ]
})
export class AddEquipmentComponent implements OnInit {
  dropDownEquipmentlist: EquipmentCategory;
  nbForm: FormGroup;
  formTitle: string = "Add";
  selectedItem: Equipment;
  equipmentCategory: Equipment[];
  customErrorStateMatcher = new CustomStateError();
  loading: boolean = false
  constructor( private router: Router, private messageService: MessageService,private formBuilder: FormBuilder, private equipmentCategoryService: EquipmentCategoryService, private equipmentService: EquipmentService, protected dialogRef: NbDialogRef<AddEquipmentComponent>) {
    this.nbForm = this.formBuilder.group({
      EquipmentId: [''],
      // EquipmentCategoryName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
      EquipmentName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      MinOrderQty: ['', [Validators.required]],
      EquipmentCategoryId: [null, Validators.required],
      UnitName: ['']
    });
    this.getEquipmentListRecords()
  }

  ngOnInit(): void {
    console.log(this.selectedItem, "selectedItem")
    this.getDropdownList();
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        EquipmentId: this.selectedItem.EquipmentId,
        EquipmentName: this.selectedItem.EquipmentName,
        EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
        MinOrderQty: this.selectedItem.MinOrderQty,
        UnitName: this.selectedItem.UnitName,
      });
    }
  }

  getEquipmentListRecords() {
    this.equipmentService.getEquipmentList().subscribe((res: Equipment[]) => {
      console.log(res)
      this.equipmentCategory = res;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('EquipmentName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.equipmentCategory, 'EquipmentName', this.selectedItem.EquipmentName)]);
      } else {
        this.nbForm.get('EquipmentName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.equipmentCategory, 'EquipmentName', null)]);
      }
    })
  }
  getDropdownList() {
    this.equipmentCategoryService.getEquipmentCategoryList().subscribe((res: any) => {
      this.dropDownEquipmentlist = res;
    })
  }
  setValUnits() {
    ////debugger;
    const equipmentCategoryId = this.nbForm.value.EquipmentCategoryId
    this.equipmentService.getUnitByEquipmentList(equipmentCategoryId).subscribe((res: any) => {
      this.nbForm.get('UnitName').setValue(res.UnitName)
    })
  }


  close() {

    this.dialogRef.close();
  }
  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      this.loading = true

      if (this.selectedItem !== undefined) {
        this.nbForm.get('EquipmentId').setValue(this.selectedItem.EquipmentId);
        const equipmentDetails = this.nbForm.value
        console.log(equipmentDetails)

        this.equipmentService.updateEquipmentDetail(equipmentDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(equipmentDetails);
            // this.close();
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
        const equipmentDetails = this.nbForm.value
        this.equipmentService.addEquipmentDetail(equipmentDetails).subscribe(res => {

          if (res == true) {
            this.loading = false
            this.dialogRef.close(equipmentDetails);
            // this.close();
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
