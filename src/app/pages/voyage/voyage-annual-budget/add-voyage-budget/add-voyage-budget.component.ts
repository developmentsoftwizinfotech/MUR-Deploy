import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { CostHeads, VoyageBudget } from '@app-pages/voyage/voyage-list/voyage';
import { NbDialogRef } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { root } from 'rxjs/internal-compatibility';
import { VoyageBudgetService } from '../voyage-budget.service';

@Component({
  selector: 'ngx-add-voyage-budget',
  templateUrl: './add-voyage-budget.component.html',
  styleUrls: ['./add-voyage-budget.component.scss'],
  providers: [{ provide: root, useClass: CustomStateError }, MessageService]
})
export class AddVoyageBudgetComponent implements OnInit {
  loading = false;
  formTitle: string = "Add";
  customErrorStateMatcher = new CustomStateError()
  selectedItem: VoyageBudget;
  existingValues: string[] = ['apple', 'banana', 'cherry'];
  nbForm: FormGroup;
  status: VoyageBudget[];
  costDropDown: CostHeads[];
  constructor(private formBuilder: FormBuilder, private voyageBudgetService: VoyageBudgetService, protected dialogRef: NbDialogRef<AddVoyageBudgetComponent>, private router: Router, private messageService: MessageService
  ) {

    this.nbForm = this.formBuilder.group({
      AnualBudgetId: [0],
      CostHeadId: [null, Validators.required],
      BudgetYear: ['', Validators.required],
      Active: [true],
      TotalBudgetCost: ['', Validators.required]
    });

    this.getstatusListRecords()
  }








  ngOnInit(): void {
    this.getCostHeadsList();


    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        AnualBudgetId: this.selectedItem.AnualBudgetId,
        CostHeadId: this.selectedItem.CostHeadId.toString(),
        Active: this.selectedItem.Active,
        TotalBudgetCost: this.selectedItem.TotalBudgetCost,
        BudgetYear: new Date(this.selectedItem.BudgetYear),
      });
    }
  }

  async getCostHeadsList() {
   await this.voyageBudgetService.getCostHeaderList().subscribe((res: CostHeads[]) => {
      this.costDropDown = res
    })
  }
  getstatusListRecords() {
    this.voyageBudgetService.getList('').subscribe((res: VoyageBudget[]) => {
      console.log(res)
      this.status = res;

      if (this.selectedItem !== undefined) {
        // this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', this.selectedItem.StatusName)]);
        // this.nbForm.get('StatusName').updateValueAndValidity();
      } else {
        // this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', null)]);
        // this.nbForm.get('StatusName').updateValueAndValidity();
      }

    })
  }

  close() {
    this.dialogRef.close();
  }
  async submit() {
    if (this.nbForm.valid) {
      this.loading = true
      const yearDate = this.nbForm.value.BudgetYear
      const updatedDate = await this.customErrorStateMatcher.changeDateTimeZone(yearDate);
      this.nbForm.value.BudgetYear = updatedDate;
      this.customErrorStateMatcher.trimFormValues(this.nbForm)


      if (this.selectedItem !== undefined) {
        this.nbForm.get('AnualBudgetId').setValue(this.selectedItem.AnualBudgetId);

        const statusDetails = this.nbForm.value
        this.voyageBudgetService.updateDetail(statusDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(statusDetails);
            // this.close();
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
        const statusDetails = this.nbForm.value
        this.voyageBudgetService.addDetail(statusDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(statusDetails);
            // this.close();
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
