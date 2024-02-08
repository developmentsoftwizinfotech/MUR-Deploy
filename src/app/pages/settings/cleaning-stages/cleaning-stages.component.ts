import { Component, OnDestroy, OnInit } from "@angular/core";
import { CleaningStagesService } from "./cleaning-stages.service";
import { CleaningStages } from "./cleaning-stages";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { CustomStateError } from "@app-pages/shared/dynamic-dialog/custom-error";
@Component({
  selector: "ngx-cleaning-stages",
  templateUrl: "./cleaning-stages.component.html",
  styleUrls: ["./cleaning-stages.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class CleaningStagesComponent implements OnInit, OnDestroy {
  editModeOn: boolean = false;
  customErrorStateMatcher = new CustomStateError()
  cleaningForm: FormGroup;
  updatecleaningForm: FormGroup
  plasceholder: { field: string; header: string; }[];
  geeks: boolean;
  products: CleaningStages[];
  display: boolean = false;
  visible: boolean;
  estimatedCleaningTime:number[]=[]
  saveEnable: boolean;
  cols: { field: string; header: string; }[];
  totleWeightage: number;
  items: { label: string; }[];
  statuses: SelectItem[];
  clonedProducts: { [s: string]: CleaningStages } = {};
  constructor(
    private primengConfig: PrimeNGConfig,
    private cleaningStagesService: CleaningStagesService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private dialogService: NbDialogService
  ) {
    this.cleaningForm = this.fb.group({
      CleaningStageId: [""],
      CleaningStageName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      ProgressWeightage: ["", [Validators.required, Validators.min(1), Validators.max(100)]],
      EstimatedCleaningTime: [null, [Validators.required]],

    });
    this.updatecleaningForm = this.fb.group({
      CleaningStageId: [""],
      CleaningStageName: ["", [Validators.required]],
      ProgressWeightage: ["", [Validators.required, Validators.min(1), Validators.max(100)]],
      EstimatedCleaningTime: [null, [Validators.required]],

    }
    );
    this.timeObject();
  }

  ngOnInit() {

    this.cleaningStageList();
    this.primengConfig.ripple = true;
    this.items = [{ label: "ADD NEW CLEANING STAGE" }];
    this.plasceholder = [
      { field: "name", header: "Cleaning Stage" },
      {
        field: "category",
        header: "Progress weightage in % where total of all stages = 100%",
      },
      { field: "quantity", header: "Time" },
    ];


    // this.initializeRowForms()
  }

  timeObject() {
    //debugger
    for (let time = 1; time <= 12; time++) {
      this.estimatedCleaningTime.push(time);
    }
  }


  //  = this.timeObject();

  cleaningStageList() {
    this.cleaningStagesService.getCleaningStagesList().subscribe((data: CleaningStages[]) => {
      this.products = data;
      this.cleaningForm.get('CleaningStageName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(250), this.customErrorStateMatcher.duplicateValidator(this.products, 'CleaningStageName', null)]);
      // this.updatecleaningForm.get('CleaningStageName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(250), this.customErrorStateMatcher.duplicateValidator(this.products, 'CleaningStageName', null)]);
      // this.updatecleaningForm.get('ProgressWeightage').setValidators([Validators.required, Validators.maxLength(3), Validators.min(1), Validators.pattern(/^[1-9]\d{0,2}$/)]);
      // this.updatecleaningForm.get('EstimatedCleaningTime').setValidators([Validators.required]);
    });
  }


  submit() {
    ////debugger;
    if (this.cleaningForm.invalid) {
      this.cleaningForm.markAllAsTouched();
    } else {
      this.cleaningStagesService.addCleaningStagesDetail(this.cleaningForm.value).subscribe(res => {
        console.log(res);
        if (res == true) {
          this.products.push(this.cleaningForm.value);
          this.showPop('success', 'Success', 'Record Saved')
          this.clearForm();
          this.cleaningStageList();
        }
      })

    }
  }

  clearForm() {
    this.cleaningForm.reset();
  }
  deleteDetails(deleteRecord: CleaningStages) {
    ////debugger;
    const dialogRef = this.dialogService.open(DynamicDialogComponent, {
      context: {
        title: "Dynamic Dialog",
        message: 'Are You Sure Want To Delete',
        buttons: [
          { label: 'Cancel', value: false, status: 'basic' },
          { label: 'Delete', value: true, status: 'danger' },
        ],
      },
    });

    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {
        this.cleaningStagesService.deleteCleaningStages(deleteRecord).subscribe(res => {
          console.log(res)
          if (res) {
            this.cleaningStageList();
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      }
    });

  }

 

  onRowEditInit(product: CleaningStages) {
    ////debugger;
    this.updatecleaningForm.get('CleaningStageName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(250), this.customErrorStateMatcher.duplicateValidator(this.products, 'CleaningStageName', product.CleaningStageName)]);

    this.editModeOn = true
    this.clonedProducts[product.CleaningStageId] = { ...product };

  }
  onRowEditSave(editCleaningStages: CleaningStages) {
    debugger;
    this.updatecleaningForm.value.CleaningStageId = editCleaningStages.CleaningStageId
    console.log(this.updatecleaningForm.value);
    if (this.updatecleaningForm.invalid) {
      this.editModeOn = true

    } else {
      this.editModeOn = false
      this.cleaningStagesService.updateCleaningStagesDetail(editCleaningStages).subscribe(res => {
        if (res) {
          this.showPop('success', 'Success', 'Record Saved')

        }

      })
    }

  }
  onRowEditCancel(product: CleaningStages, index: number) {
    this.editModeOn = false
    this.products[index] = this.clonedProducts[product.CleaningStageId];
    delete this.clonedProducts[product.CleaningStageId];

  }


  finalData() {
    ////debugger;
    const finalArray = this.products
    const totalProgress = finalArray.reduce((sum, total) => sum + total.ProgressWeightage, 0);
    if (totalProgress === 100) {
      this.cleaningStagesService.finalCleaningStagesDetail(finalArray).subscribe(res => {
        console.log(res)
        if (res == true) {
          this.showPop('success', 'Success', 'All Stages Saved')
          this.cleaningStageList();
        }
      })
    } else {
      this.showPop('error', 'Something Wrong !', `Total No Of Cleaning Stages Progress Weightage is : ${totalProgress}%`)
      // alert("Record Please Check Total No Of Cleaning Stages Progress Weightage is " + totalProgress + "%")
    }
  }

  onRowReorder(event) {
    //debugger
    console.log(event, "sorted by");
    console.log(this.products, " products sorted by");
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  ngOnDestroy(): void {

  }


 

}
