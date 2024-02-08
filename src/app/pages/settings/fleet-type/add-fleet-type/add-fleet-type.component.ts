
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { FleetType, FleetTypeList } from '@app-pages/settings/setting';
import { FleetTypeService } from '@app-pages/settings/fleet-type/fleet-type.service';

import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-add-fleet-type',
  templateUrl: './add-fleet-type.component.html',
  styleUrls: ['./add-fleet-type.component.scss'] ,
  providers: [{ provide: root, useClass: CustomStateError } ,MessageService]
 })
export class AddFleetTypeComponent {

  loading = false;
        formTitle: string = "Add";
           selectedItem: FleetType;
      customErrorStateMatcher = new CustomStateError()
        nbForm: FormGroup;
  fleetType: FleetType[];
        constructor(private formBuilder: FormBuilder,private fleetTypeService:FleetTypeService,protected dialogRef: NbDialogRef<AddFleetTypeComponent>, private router: Router, private messageService: MessageService
          ){
          this.nbForm = this.formBuilder.group({
            FleetTypeId: [''],
            FleetTypeName: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
                   });
          this.getFleetTypeListRecords()
        }
           ngOnInit(): void {   
          if (this.selectedItem !== undefined) {
            this.formTitle = "Update"
            this.nbForm.setValue({
              FleetTypeId:this.selectedItem.FleetTypeId,
              FleetTypeName: this.selectedItem.FleetTypeName,
            });
          }
        }
      
       
        getFleetTypeListRecords() {
          this.fleetTypeService.getfleetTypeList(1,100,'').subscribe((res: FleetTypeList) => {
            console.log(res)
            this.fleetType = res.FleetTypeData;
            if (this.selectedItem !== undefined) {
              this.nbForm.get('FleetTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100),this.customErrorStateMatcher.duplicateValidator(this.fleetType, 'FleetTypeName',this.selectedItem.FleetTypeName)]);
              // this.nbForm.get('FleetTypeName').updateValueAndValidity();
            } else {
              this.nbForm.get('FleetTypeName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100),this.customErrorStateMatcher.duplicateValidator(this.fleetType, 'FleetTypeName', null)]);
              // this.nbForm.get('FleetTypeName').updateValueAndValidity();
            }
          })
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
              this.nbForm.get('FleetTypeId').setValue(this.selectedItem.FleetTypeId);
              const fleetTypeDetails = this.nbForm.value
              this.fleetTypeService.updatefleetTypeDetail(fleetTypeDetails).subscribe(res => {
                if (res == true) {
                  this.loading = false

                  this.dialogRef.close(fleetTypeDetails);
                  // this.close();
                }   else {
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
              const fleetTypeDetails = this.nbForm.value
              this.fleetTypeService.addfleetTypeDetail(fleetTypeDetails).subscribe(res => {
                if (res == true) {
                  this.loading = false

                  this.dialogRef.close(fleetTypeDetails);
                  // this.close();
                }   else {
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
      
    
  
