import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, AsyncValidatorFn, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Cargo, CargoList } from '@app-pages/settings/setting';
import { CargoService } from "@app-pages/settings/cargo/cargo.service";
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { root } from 'rxjs/internal-compatibility';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ngx-add-cargo',
  templateUrl: './add-cargo.component.html',
  styleUrls: ['./add-cargo.component.scss'],
  providers: [
    { provide: root, useClass: CustomStateError }, MessageService
  ]
})
export class AddCargoComponent implements OnInit {
  loading = false;

  formTitle: string = "Add";
  selectedItem: Cargo;
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
  cargoData: Cargo[] | null;
  nbForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private messageService: MessageService, private cargoService: CargoService, protected dialogRef: NbDialogRef<AddCargoComponent>) {
    this.getCargoListRecords();
    this.nbForm = this.formBuilder.group({
      CargoId: [''],
      CargoName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
  }
  getCargoListRecords() {
    this.cargoService.getCargoList(1, 100, "").subscribe((res: CargoList) => {
      console.log(res)
      this.cargoData = res.CargoData
      if (this.selectedItem !== undefined) {
        this.nbForm.get('CargoName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.cargoData, 'CargoName', this.selectedItem.CargoName)]);
        this.nbForm.get('CargoName').updateValueAndValidity();
      } else {
        this.nbForm.get('CargoName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.cargoData, 'CargoName', null)]);
        this.nbForm.get('CargoName').updateValueAndValidity();
      }

    })
  }

  ngOnInit(): void {
    this.getCargoListRecords()
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        CargoId: this.selectedItem.CargoId,
        CargoName: this.selectedItem.CargoName,
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

  clearForm() {
    this.nbForm = this.formBuilder.group({
      CargoId: [''],
      CargoName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
    this.getCargoListRecords();
  }

  submit() {
    debugger;
    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      if (this.selectedItem !== undefined) {
        this.nbForm.get('CargoId').setValue(this.selectedItem.CargoId);
        const cargoDetails = this.nbForm.value
        this.cargoService.updateCargoDetail(cargoDetails).subscribe((res) => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(cargoDetails);
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
        const cargoDetails = this.nbForm.value
        this.cargoService.addCargoDetail(cargoDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(cargoDetails);
          }
          else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }        })
      }
    } else {
      this.nbForm.markAllAsTouched();
    }
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

}

