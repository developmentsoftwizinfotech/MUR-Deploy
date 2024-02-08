import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CircularCategory, CircularCategoryList } from '@app-pages/settings/setting';
import { CircularService } from '@app-pages/settings/circular/circular.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-add-circular',
  templateUrl: './add-circular.component.html',
  styleUrls: ['./add-circular.component.scss'],
  providers: [
    { provide: root, useClass: CustomStateError },
    MessageService
  ]
})





export class AddCircularComponent implements OnInit{
  @Component({
    selector: 'ngx-add-operator',
    templateUrl: './add-operator.component.html',
    styleUrls: ['./add-operator.component.scss']
  })
  customErrorStateMatcher = new CustomStateError()
  formTitle: string = "Add";
  selectedItem: CircularCategory;
  nbForm: FormGroup;
  circular: CircularCategory[];
  loading = false;

  constructor(private formBuilder: FormBuilder, private circularService: CircularService, protected dialogRef: NbDialogRef<AddCircularComponent>, private router: Router, private messageService: MessageService
    ) {
    this.nbForm = this.formBuilder.group({
      CircularCategoryId: [''],
      CircularCategoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    });
    this.getCircularList(1,100,'');
  }

  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        CircularCategoryId: this.selectedItem.CircularCategoryId,
        CircularCategoryName: this.selectedItem.CircularCategoryName,
      });
    }
  }


  getCircularList(cPage, nRows, filter) {
    this.circularService.getCircularList(cPage, nRows, filter).subscribe((res: CircularCategoryList) => {
      console.log(res)
      this.circular = res.CircularCategoryData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('CircularCategoryName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.circular, 'CircularCategoryName', this.selectedItem.CircularCategoryName)]);
      } else {
        this.nbForm.get('CircularCategoryName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.circular, 'CircularCategoryName', null)]);
      }
    })
  }

  close() {
    this.dialogRef.close();
  }

  clearForm(){
    this.nbForm = this.formBuilder.group({
      CircularCategoryId: [''],
      CircularCategoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    });
    this.getCircularList(1,100,'');

  }

  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true

      this.customErrorStateMatcher.trimFormValues(this.nbForm)
      if (this.selectedItem !== undefined) {
        this.nbForm.get('CircularCategoryId').setValue(this.selectedItem.CircularCategoryId);
        const circularDetails = this.nbForm.value
        this.circularService.updateCircularDetail(circularDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(circularDetails);
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
      } else {
        const circularDetails = this.nbForm.value
        this.circularService.addCircularDetail(circularDetails).subscribe(res => {
          if (res == true) {
            this.loading = false

            this.dialogRef.close(circularDetails);
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




