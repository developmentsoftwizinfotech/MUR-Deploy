import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentCategory, EquipmentCategoryList, Unit, UnitList } from '@app-pages/settings/setting';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { NbDialogRef } from '@nebular/theme';
import { EquipmentCategoryService } from '@app-pages/inventory/equipment-category/equipment-category.service';
import { UnitService } from '@app-pages/settings/unit/unit.service';
import { root } from 'rxjs/internal-compatibility';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-equipment-category',
  templateUrl: './add-equipment-category.component.html',
  styleUrls: ['./add-equipment-category.component.scss'],
  providers:[{ provide: root, useClass: CustomStateError },MessageService, ConfirmationService,]
})
export class AddEquipmentCategoryComponent implements OnInit{
  dropDownUnitlist: Unit[];
  nbForm: FormGroup;
  formTitle: string = "Add";
  selectedItem: any;
  equipmentCategory: any[];
  customErrorStateMatcher = new CustomStateError()
  loading:boolean=false;
  constructor(private formBuilder: FormBuilder, private unitService: UnitService, private equipmentCategoryService: EquipmentCategoryService, protected dialogRef: NbDialogRef<AddEquipmentCategoryComponent>, private router: Router, private messageService: MessageService) {
    this.nbForm = this.formBuilder.group({
      EquipmentCategoryId: [''],
      EquipmentCategoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      UnitId: [null, Validators.required],
      ConsumptionType: ['Consumables', Validators.required],
      Maker: [false],
      DateSupplied: [false],
      PortSupplied: [false],
      Condition: [false],
      DateofExpiry: [false]

    });
    // this.getSHAListRecords()
    this.getEquipmentListRecords();

  }

  ngOnInit(): void {
    this.getDropdownList(1,100,'');
    if (this.selectedItem !== undefined) {

      this.formTitle = "Update"
      this.nbForm.setValue({
        EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
        EquipmentCategoryName: this.selectedItem.EquipmentCategoryName,
        UnitId: this.selectedItem.UnitId,
        ConsumptionType: this.selectedItem.ConsumptionType,
        Maker: this.selectedItem.Maker,
        DateSupplied: this.selectedItem.DateSupplied,
        PortSupplied: this.selectedItem.PortSupplied,
        Condition: this.selectedItem.Condition,
        DateofExpiry: this.selectedItem.DateofExpiry
      });
    }
  }

  getEquipmentListRecords() {
    this.equipmentCategoryService.getEquipmentCategoryList().subscribe((res: any) => {
      this.equipmentCategory = res
      if (this.selectedItem !== undefined) {
        this.nbForm.get('EquipmentCategoryName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.equipmentCategory, 'EquipmentCategoryName', this.selectedItem.EquipmentCategoryName)]);

      } else {
        this.nbForm.get('EquipmentCategoryName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.equipmentCategory, 'EquipmentCategoryName', null)]);

      }

    })
  }
  getDropdownList(cPage, nRows, filter) {
    this.unitService.getUnitList(cPage, nRows, filter).subscribe((res: UnitList) => {
      this.dropDownUnitlist = res.UnitData;
    })


  }

  clearForm() {
    ////debugger;
    if (this.selectedItem !== undefined) {
      this.nbForm.reset({
        EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
        EquipmentCategoryName: null,
        UnitId: null,
        ConsumptionType: 'Consumables',
        Maker: false,
        DateSupplied: false,
        PortSupplied: false,
        Condition: false,
        DateofExpiry: false
      });
    }else{
      this.nbForm.reset({
        EquipmentCategoryId: '',
        EquipmentCategoryName: null,
        UnitId: null,
        ConsumptionType: 'Consumables',
        Maker: false,
        DateSupplied: false,
        PortSupplied: false,
        Condition: false,
        DateofExpiry: false
      });
    }
  }

  close() {

    this.dialogRef.close();
  }
  submit() {

    if (this.nbForm.valid) {
      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      this.loading = true
      if (this.selectedItem !== undefined) {
        const equipmentDetails = this.nbForm.value
        //debugger
        this.equipmentCategoryService.updateEquipmentCategoryDetail(equipmentDetails).subscribe(res => {
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

        this.equipmentCategoryService.addEquipmentCategoryDetail(equipmentDetails).subscribe(res => {
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
